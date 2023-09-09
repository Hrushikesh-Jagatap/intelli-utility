const HttpResponseHandler = require('./HttpResponseHandler');
const Logger = require('./Logger/Logger');
const ReqLogger = require('./Logger/RequestLogger');

// const RequestHandlerOld = require('./RequestHandlerOld');
const RequestHandler = require('./HttpRequestHandler');
const reqFormat = require('./Morgan');
const AuthManager = require('./AuthManager');
const ErrorHandler = require('./ErrorHandler');

module.exports = {
  HttpResponseHandler,
  Logger,
  ReqLogger,
  RequestHandler,
  reqFormat,
  AuthManager,
  ErrorHandler,
};
