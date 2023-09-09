const PINO = require('pino-http');
const _ = require('lodash');
const { loggerOptions } = require('../../../config');

const options = {
  ...loggerOptions.options,
  customProps: loggerOptions.customProps,
};

const requestLogger = PINO(options);
module.exports = requestLogger;
