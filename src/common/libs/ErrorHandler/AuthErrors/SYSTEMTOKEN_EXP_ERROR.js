const BaseError = require('../BaseError');

class SYSTEMTOKEN_EXP_ERROR extends BaseError {
  constructor(error) {
    const code = 'SYSTEMTOKEN_EXP_ERROR';
    const statusCode = 401;
    const message = 'system Token has expired';
    super({ code, statusCode, message, error });
  }
}

module.exports = SYSTEMTOKEN_EXP_ERROR;
