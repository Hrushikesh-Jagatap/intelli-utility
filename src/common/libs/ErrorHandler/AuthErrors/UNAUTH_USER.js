const BaseError = require('../BaseError');

class UNAUTH_USER extends BaseError {
  constructor(error) {
    const code = 'UNAUTH_USER';
    const statusCode = 403;
    const message = 'unauthenticated access detected';
    super({ code, statusCode, message, error });
  }
}

module.exports = UNAUTH_USER;
