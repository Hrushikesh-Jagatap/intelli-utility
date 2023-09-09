const { LOAD_BALANCER } = require('../../config');
const {
  ErrorHandler: { VERIFY_OTP_ERROR, SEND_OTP_ERROR },
} = require('../libs');
const { INTERNAL_SERVER_ERROR, MS_SERVER_ERROR } = require('../libs/ErrorHandler');
const RequestHandler = require('../libs/RequestHandlerOld');

const config = {
  baseURL: `${LOAD_BALANCER}/ms/apis`,
  // timeout: 5000,
};

const apiService = new RequestHandler(config);

const healthcheck = async ({ headers, params = null }) => {
  try {
    const options = { headers, params };
    const { data } = await apiService.get('/healthcheck', options);
    return data;
  } catch (error) {
    throw new MS_SERVER_ERROR(error);
  }
};

const sms = async ({ headers, body = null, params = null }) => {
  try {
    const options = {
      params,
      headers,
    };
    const { data } = await apiService.post('/v1/notification/sms', body, options);
    return data;
  } catch (error) {
    throw new MS_SERVER_ERROR(error);
  }
};

const call = async ({ headers, body = null, params = null }) => {
  try {
    const options = {
      params,
      headers,
    };
    const { data } = await apiService.post('/v1/notification/call', body, options);
    return data;
  } catch (error) {
    throw new MS_SERVER_ERROR(error);
  }
};

module.exports = {
  healthcheck,
  sms,
  call,
};
