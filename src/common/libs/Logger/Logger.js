const PINO = require('pino');
const _ = require('lodash');
const getNamespace = require('cls-hooked').getNamespace;
const config = require('../../../config');

const {
  loggerOptions: { options },
} = config;

class Logger {
  constructor() {
    this.logger = PINO(options);
    this.sessionId = this.sessionId;
    if (!Logger.instance) {
      Logger.instance = this;
    }
    return Logger.instance;
  }
  info(data) {
    data = this._inject(data);
    let sessionId = data.sessionId;
    let clientIp = data.clientIp;
    delete data.sessionId;
    delete data.clientIp;
    this.logger.info({ data, sessionId: sessionId, clientIp: clientIp });
  }
  warn(data) {
    data = this._inject(data);
    let sessionId = data.sessionId;
    let clientIp = data.clientIp;
    delete data.sessionId;
    delete data.clientIp;
    this.logger.warn({ data, sessionId: sessionId, clientIp: clientIp });
  }

  debug(data) {
    data = this._inject(data);
    let sessionId = data.sessionId;
    let clientIp = data.clientIp;
    delete data.sessionId;
    delete data.clientIp;
    this.logger.debug({ data, sessionId: sessionId, clientIp: clientIp });
  }

  error(data) {
    data = this._inject(data);
    let sessionId = data.sessionId;
    let clientIp = data.clientIp;
    delete data.sessionId;
    delete data.clientIp;
    this.logger.error({ data, sessionId: sessionId, clientIp: clientIp });
  }

  _inject(data) {
    if (_.isString(data)) {
      data = { data: data };
    }

    let currentSession = getNamespace(config.sessionName);
    data.sessionId = currentSession.get('sessionId');
    data.clientIp = currentSession.get('clientIp');
    return data;
  }
}
const logger = new Logger();
module.exports = logger;
