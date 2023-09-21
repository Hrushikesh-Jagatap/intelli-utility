const { AccessEnv } = require('../common/utility');

const LOAD_BALANCER = AccessEnv('LOAD_BALANCER', 'https://uat-lb.sarvm.internal');
const VERBOSE_LOGGING = AccessEnv('VERBOSE_LOGGING', 'false') === 'true';

const LOGGER_LEVEL = AccessEnv('PINO_LOG_LEVEL', 'info');
const LOGGER_MODULE_NAME = AccessEnv('HOST_SERVICE_NAME','intel');
const LOGGER_TRANSPORT_TYPE = AccessEnv('PINO_LOGGER_TRANSPORT_TYPE', 'pino/file');
const PINO_LOGGER_DESTINATION =
  AccessEnv('PINO_LOGGER_DESTINATION', '1') === '1' ? 1 : AccessEnv('PINO_LOGGER_DESTINATION');
const PINO_ASYNC_TYPE = AccessEnv('PINO_ASYNC_TYPE', true);
const SYSTEM_TOKEN = AccessEnv('SYSTEM_TOKEN', 'DOES_NOT_EXIST');
const SESSION_NAME = AccessEnv('SESSION_NAME', 'logger_session');
module.exports = {
  LOAD_BALANCER,
  VERBOSE_LOGGING,
  loggerOptions: {
    options: {
      name: LOGGER_MODULE_NAME,
      level: LOGGER_LEVEL,
      messageKey: 'message',
      errorKey: 'error',
      enabled: true,
      timestamp: () => `,"time": "${new Date(Date.now()).toUTCString()}"`,
      transport: {
        target: LOGGER_TRANSPORT_TYPE,
        options: {
          translateTime: 'SYS:dd-mm-yyyy HH:MM:ss',
          destination: PINO_LOGGER_DESTINATION,
          mkdir: true,
          sync: PINO_ASYNC_TYPE,
        },
      },
      formatters: {
        level: (label) => ({ level: label }),
      },
    },
    customProps: function (req, res) {
      return {
        sessionId: res.locals.sessionId,
        clientIp: res.locals.clientIp,
      };
    },
  },
  systemToken: SYSTEM_TOKEN,
  sessionName: SESSION_NAME,
};
