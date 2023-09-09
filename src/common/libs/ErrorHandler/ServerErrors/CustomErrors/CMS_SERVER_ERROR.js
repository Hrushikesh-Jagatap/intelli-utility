const BaseError = require('../../BaseError');

class CMS_SERVER_ERROR extends BaseError {
  constructor(error) {
    const code = 'CMS_SERVER_ERROR';
    const statusCode = 500;
    const message = 'CMS server error occurred';
    super({ code, statusCode, message, error });
  }
}

module.exports = CMS_SERVER_ERROR;
