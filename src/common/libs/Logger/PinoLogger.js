const PINO = require('pino');
const config = require('../../../config');

const opts = config.loggerOptions;

const Logger = PINO(opts);

module.exports = Logger;
