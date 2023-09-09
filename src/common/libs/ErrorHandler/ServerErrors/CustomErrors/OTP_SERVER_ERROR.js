const BaseError = require('../../BaseError');

class OTP_SERVER_ERROR extends BaseError {
  constructor(error) {
    const code = 'OTP_SERVER_ERROR';
    const statusCode = 500;
    const message = 'OTP server error occurred';
    super({ code, statusCode, message, error });
  }
}

module.exports = OTP_SERVER_ERROR;
