const BaseError = require('../BaseError');

class REFRESHTOKEN_EXP_ERROR extends BaseError {
  constructor(error) {
    const code = 'REFRESHTOKEN_EXP_ERROR';
    const statusCode = 401;
    const message = 'Refresh Token  has expired';
    super({ code, statusCode, message, error });
  }
}

module.exports = REFRESHTOKEN_EXP_ERROR;
