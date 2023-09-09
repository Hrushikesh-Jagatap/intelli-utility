const log4js = require('log4js');
const { VERBOSE_LOGGING } = require('../../../config');

class Logger {
  constructor() {
    this.logger = log4js.getLogger();
    if (!Logger.instance) {
      Logger.instance = this;
    }
    return Logger.instance;
  }

  static getInstance() {
    return Logger.instance;
  }

  // rolls log files based on a basic of file size : Async Updates to files
  useDefault() {
    this.logger = log4js.getLogger();
  }

  // rolls log files based on a configurable time
  useDateLog() {
    this.logger = log4js.getLogger('dateLog');
  }

  configure(simpleFileLocation, jsonFileLocation) {
    this.logger.level = 'ALL';

    log4js.addLayout('json', function (config) {
      return function (logEvent) {
        return JSON.stringify(logEvent) + config.separator;
      };
    });

    log4js.configure({
      appenders: {
        console: { type: 'stdout' },
        simpleLog: {
          type: 'file',
          filename: simpleFileLocation,
          maxLogSize: 10485760,
          backups: 3,
          compress: true,
        },
        jsonLog: {
          type: 'file',
          filename: jsonFileLocation,
          maxLogSize: 10485760,
          backups: 3,
          compress: true,
          layout: { type: 'json', separator: ',' },
        },
        // dateLog: { type: 'dateFile', filename: './src/common/libs/Logger/date.log' },
      },
      categories: {
        default: { appenders: ['console', 'simpleLog', 'jsonLog'], level: 'ALL' },
        // dateLog: { appenders: ['dateLog'], level: 'ALL' },
      },
    });
  }

  shutdown() {
    this.logger.shutdown();
  }

  error(message) {
    if (typeof message !== 'undefined' && message !== null) this.logger.error(message);
    else this.logger.error('ERR: undefined / null Message');
  }

  warn(message) {
    if (typeof message !== 'undefined' && message !== null) this.logger.warn(message);
    else this.logger.warn('ERR: undefined / null Message');
  }

  info(message) {
    if (typeof message !== 'undefined' && message !== null) this.logger.info(message);
    else this.logger.info('ERR: undefined / null Message');
  }

  debug(message) {
    if (typeof message !== 'undefined' && message !== null) {
      if (VERBOSE_LOGGING) this.logger.debug(message);
    } else this.logger.debug('ERR: undefined / null Message');
  }

  fatal(message) {
    if (typeof message !== 'undefined' && message !== null) this.logger.fatal(message);
    else this.logger.fatal('ERR: undefined / null Message');
  }

  mark(message) {
    if (typeof message !== 'undefined' && message !== null) this.logger.mark(message);
    else this.logger.mark('ERR: undefined / null Message');
  }

  trace(message) {
    if (typeof message !== 'undefined' && message !== null) this.logger.trace(message);
    else this.logger.trace('ERR: undefined / null Message');
  }
}

module.exports = Logger;
