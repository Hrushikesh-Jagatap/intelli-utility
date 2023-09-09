const BaseError = require('../../BaseError');

class UMS_SERVER_ERROR extends BaseError {
  constructor(error) {
    const code = 'UMS_SERVER_ERROR';
    const statusCode = 500;
    const message = 'User Management Service server error occurred';
    super({ code, statusCode, message, error });
  }
}

module.exports = UMS_SERVER_ERROR;
