const BaseError = require('../BaseError');

class INTERNAL_SERVER_ERROR extends BaseError {
  constructor(error) {
    const code = 'INTERNAL_SERVER_ERROR';
    const statusCode = 500;
    const message = 'Internal server error occurred';
    super({ code, statusCode, message, error });
  }
}

module.exports = INTERNAL_SERVER_ERROR;
