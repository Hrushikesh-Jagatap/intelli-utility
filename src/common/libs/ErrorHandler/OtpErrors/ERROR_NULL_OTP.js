const BaseError = require('../BaseError');

class ERROR_NULL_OTP extends BaseError {
  constructor(error) {
    const code = 'ERROR_NULL_OTP';
    const statusCode = 401;
    const message = 'Otp is null from db';
    super({ code, statusCode, message, error });
  }
}

module.exports = ERROR_NULL_OTP;
