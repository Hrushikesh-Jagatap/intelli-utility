const BaseError = require('../../BaseError');

class UNHANDLED_SERVER_ERROR extends BaseError {
  constructor(error) {
    const code = 'UNHANDLED_SERVER_ERROR';
    const statusCode = 500;
    const message = 'Unhandled server error occurred';
    super({ code, statusCode, message, error });
  }
}

module.exports = UNHANDLED_SERVER_ERROR;
