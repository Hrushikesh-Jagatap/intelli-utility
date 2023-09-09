const BaseError = require('../BaseError');

class BAD_REQUEST_ERROR extends BaseError {
  constructor(error) {
    const code = 'BAD_REQUEST_ERROR';
    const statusCode = 500;
    const message = 'Bad request';
    super({ code, statusCode, message, error });
  }
}

module.exports = BAD_REQUEST_ERROR;
