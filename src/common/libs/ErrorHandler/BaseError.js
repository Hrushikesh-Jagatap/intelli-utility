const { reqToCurl } = require('../../utility');
const Logger = require('../Logger/Log4J_Logger');
const HttpResponseHandler = require('../HttpResponseHandler');

const logger = new Logger();

class AppError extends Error {
  constructor({ code, statusCode, message, key, error = null }) {
    super();
    this.code = code ?? 'UNHANDLED_ERROR';
    this.statusCode = statusCode ?? '200';
    this.message = message ?? 'The Error is not handled';
    this.originalError = error ? error.name : 'ERROR';
    this.key = key ?? 'KEY_UNDEFINED';
    this.stack = error ? error.stack : null;
  }

  async handleError(req, res) {
    const { code, statusCode, message, key, originalError, devError, stack } = this;
    const curl = reqToCurl(req);

    logger.error({
      msg: {
        url: req.url,
        message,
        code,
        key,
        originalError,
        stack,
        statusCode,
        devError,
        curl,
      },
    });

    const errObj = {
      code,
      devError,
      statusCode,
      key,
      message,
    };

    HttpResponseHandler.error(req, res, errObj, statusCode);
  }
}

module.exports = AppError;
