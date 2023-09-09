const BaseError = require('../../BaseError');

class EMS_SERVER_ERROR extends BaseError {
  constructor(error) {
    const code = 'EMS_SERVER_ERROR';
    const statusCode = 500;
    const message = 'EMS server error occurred';
    super({ code, statusCode, message, error });
  }
}

module.exports = EMS_SERVER_ERROR;
