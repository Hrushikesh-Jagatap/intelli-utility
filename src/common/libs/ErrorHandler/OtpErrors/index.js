const SEND_OTP_ERROR = require('./SEND_OTP_ERROR');
const VERIFY_OTP_ERROR = require('./VERIFY_OTP_ERROR');
const OTP_NOT_MATCHED = require('./OTP_NOT_MATCHED');
const OTP_NOT_FOUND_IN_DB = require('./OTP_NOT_FOUND_IN_DB');
const DB_CONNECTION_ERROR = require('./DB_CONNECTION_ERROR');
const ERROR_NULL_OTP = require('./ERROR_NULL_OTP');
const ERROR_RETRY_LIMIT_EXCEEDED = require('./ERROR_RETRY_LIMIT_EXCEEDED');

module.exports = {
  SEND_OTP_ERROR,
  VERIFY_OTP_ERROR,
  OTP_NOT_MATCHED,
  OTP_NOT_FOUND_IN_DB,
  DB_CONNECTION_ERROR,
  ERROR_NULL_OTP,
  ERROR_RETRY_LIMIT_EXCEEDED,
};
