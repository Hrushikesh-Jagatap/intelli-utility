const BaseError = require('../BaseError');

class DEBUG_ERROR extends BaseError {
  constructor(error) {
    const code = 'DEBUG_ERROR';
    const statusCode = 500;
    const message = 'Internal Server Error | Custom';
    super({ code, statusCode, message, error });
  }
}

module.exports = DEBUG_ERROR;
