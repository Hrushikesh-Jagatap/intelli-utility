const BaseError = require('../BaseError');

class OTP_NOT_FOUND_IN_DB extends BaseError {
  constructor(error) {
    const code = 'OTP_NOT_FOUND_IN_DB';
    const statusCode = 401;
    const message = 'Error in getting OTP from DB';
    super({ code, statusCode, message, error });
  }
}

module.exports = OTP_NOT_FOUND_IN_DB;
