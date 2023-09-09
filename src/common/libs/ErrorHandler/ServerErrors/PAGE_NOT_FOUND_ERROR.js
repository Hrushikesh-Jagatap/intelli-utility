const BaseError = require('../BaseError');

class PAGE_NOT_FOUND_ERROR extends BaseError {
  constructor() {
    const code = 'PAGE_NOT_FOUND_ERROR';
    const statusCode = 404;
    const message = 'Page not found';
    super({ code, statusCode, message });
  }
}

module.exports = PAGE_NOT_FOUND_ERROR;
