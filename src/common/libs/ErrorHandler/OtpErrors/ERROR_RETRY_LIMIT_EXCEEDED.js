const BaseError = require('../BaseError');

class ERROR_RETRY_LIMIT_EXCEEDED extends BaseError {
  constructor(error) {
    const code = 'ERROR_RETRY_LIMIT_EXCEEDED';
    const statusCode = 401;
    const message = 'Retry limit has exceeded';
    super({ code, statusCode, message, error });
  }
}

module.exports = ERROR_RETRY_LIMIT_EXCEEDED;
