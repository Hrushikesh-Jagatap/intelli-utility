const BaseError = require('../../BaseError');

class HS_SERVER_ERROR extends BaseError {
  constructor(error) {
    const code = 'HS_SERVER_ERROR';
    const statusCode = 500;
    const message = 'House-Hold server error occurred';
    super({ code, statusCode, message, error });
  }
}

module.exports = HS_SERVER_ERROR;
