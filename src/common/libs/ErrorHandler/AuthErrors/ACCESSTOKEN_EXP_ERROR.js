const BaseError = require('../BaseError');

class ACCESSTOKEN_EXP_ERROR extends BaseError {
  constructor(error) {
    const code = 'ACCESSTOKEN_EXP_ERROR';
    const statusCode = 401;
    const message = 'Access Token has expired';
    super({ code, statusCode, message, error });
  }
}

module.exports = ACCESSTOKEN_EXP_ERROR;
