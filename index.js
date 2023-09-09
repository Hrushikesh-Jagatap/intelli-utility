const { HttpResponseHandler, RequestHandler, Logger, ReqLogger, reqFormat, AuthManager } = require('./src/common/libs');
const ErrorHandler = require('./src/common/libs/ErrorHandler');
const apiServices = require('./src/common/services');
const { AccessEnv, AsyncHelper, reqToCurl } = require('./src/common/utility');
const errorConstants = require('./src/constants');

module.exports = {
  ErrorHandler,
  HttpResponseHandler,
  RequestHandler,
  Logger,
  ReqLogger,
  reqFormat,
  AuthManager,
  apiServices,

  utility: {
    AccessEnv,
    AsyncHelper,
    reqToCurl,
  },

  errorConstants,
};
