const BaseError = require('../../BaseError');

class RMS_SERVER_ERROR extends BaseError {
  constructor(error) {
    const code = 'RMS_SERVER_ERROR';
    const statusCode = 500;
    const message = 'RMS server error occurred';
    super({ code, statusCode, message, error });
  }
}

module.exports = RMS_SERVER_ERROR;
