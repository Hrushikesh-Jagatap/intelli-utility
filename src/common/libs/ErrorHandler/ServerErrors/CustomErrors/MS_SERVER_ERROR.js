const BaseError = require('../../BaseError');

class MS_SERVER_ERROR extends BaseError {
  constructor(error) {
    const code = 'MS_SERVER_ERROR';
    const statusCode = 500;
    const message = 'MS server error occurred';
    super({ code, statusCode, message, error });
  }
}

module.exports = MS_SERVER_ERROR;
