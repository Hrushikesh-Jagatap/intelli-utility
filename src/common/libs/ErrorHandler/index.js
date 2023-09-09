const AuthErrors = require('./AuthErrors');
const OtpErrors = require('./OtpErrors');
const ServerErrors = require('./ServerErrors');
const BaseError = require('./BaseError');

module.exports = {
  ...AuthErrors,
  ...OtpErrors,
  ...ServerErrors,
  BaseError,
};
