const winston = require('winston');
const { format } = require('logform');
const { combine, timestamp, json, errors, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}] : ${message}`;
});

class Logger {
  constructor() {
    this.logger = winston.createLogger();
  }

  configure(FileLocation) {
    this.logger.clear();
    this.logger.level = 'silly';
    this.logger.format = combine(timestamp(), myFormat);
    this.logger.exitOnError = false;
    this.logger.add(new winston.transports.Console());
    this.logger.add(new winston.transports.File({ filename: FileLocation, format: winston.format.json() }));
  }

  error(message) {
    if (typeof message === 'object' && message !== null) this.logger.error(JSON.stringify(message));
    else this.logger.error(message);
  }

  warn(message) {
    if (typeof message === 'object' && message !== null) this.logger.warn(JSON.stringify(message));
    else this.logger.warn(message);
  }

  info(message) {
    if (typeof message === 'object' && message !== null) this.logger.info(JSON.stringify(message));
    else this.logger.info(message);
  }

  debug(message) {
    if (typeof message === 'object' && message !== null) this.logger.debug(JSON.stringify(message));
    else this.logger.debug(message);
  }

  http(message) {
    if (typeof message === 'object' && message !== null) this.logger.http(JSON.stringify(message));
    else this.logger.http(message);
  }

  verbose(message) {
    if (typeof message === 'object' && message !== null) this.logger.verbose(JSON.stringify(message));
    else this.logger.verbose(message);
  }

  silly(message) {
    if (typeof message === 'object' && message !== null) this.logger.silly(JSON.stringify(message));
    else this.logger.silly(message);
  }
}

module.exports = Logger;
