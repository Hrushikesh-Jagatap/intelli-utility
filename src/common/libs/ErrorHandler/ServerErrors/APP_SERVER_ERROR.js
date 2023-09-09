const BaseError = require('../BaseError');

class APP_SERVER_ERROR extends BaseError {
  constructor({ code: cd, key: k, message: m }) {
    let msg = `${m}:${cd}:${k}|`;
    const code = 'APP_SERVER_ERROR';
    const statusCode = 200;
    const message = msg;
    super({ code, statusCode, message });
  }
}

module.exports = APP_SERVER_ERROR;
