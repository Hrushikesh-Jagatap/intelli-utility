const INTERNAL_SERVER_ERROR = require('./INTERNAL_SERVER_ERROR');
const PAGE_NOT_FOUND_ERROR = require('./PAGE_NOT_FOUND_ERROR');
const DEBUG_ERROR = require('./DEBUG_ERROR');
const BAD_REQUEST_ERROR = require('./BAD_REQUEST_ERROR');
const customErrors = require('./CustomErrors');
const UNHANDLED_SERVER_ERROR = require('./PAGE_NOT_FOUND_ERROR');
const APP_SERVER_ERROR = require('./APP_SERVER_ERROR');

module.exports = {
  INTERNAL_SERVER_ERROR,
  PAGE_NOT_FOUND_ERROR,
  DEBUG_ERROR,
  BAD_REQUEST_ERROR,
  UNHANDLED_SERVER_ERROR,
  APP_SERVER_ERROR,
  ...customErrors,
};
