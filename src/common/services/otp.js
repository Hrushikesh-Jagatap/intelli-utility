const { LOAD_BALANCER } = require('../../config');
const {
  ErrorHandler: { APP_SERVER_ERROR, INTERNAL_SERVER_ERROR },
} = require('../libs');
const RequestHandler = require('../libs/RequestHandlerOld');

const config = {
  baseURL: `${LOAD_BALANCER}/otp/apis`,
  // timeout: 5000,
};

const apiService = new RequestHandler(config);

const healthcheck = async ({ headers, params = null }) => {
  try {
    const options = { headers, params };
    const { data } = await apiService.get('/healthcheck', options);
    return data;
  } catch (error) {
    throw new INTERNAL_SERVER_ERROR(error);
  }
};

const verifyOTP = async ({ headers, body = null, params = null }) => {
  const options = {
    params,
    headers,
  };
  let response = {};
  try {
    response = await apiService.post('/v1/otp/verifyOTP', body, options);
  } catch (err) {
    throw new INTERNAL_SERVER_ERROR();
  }
  const { success, data: result, error } = response.data;
  if (success) {
    return result;
  } else {
    const { code, key, message } = error;
    throw new APP_SERVER_ERROR({ code, key, message });
  }
};

const sendOTPOverCall = async ({ headers, body = null, params = null }) => {
  const options = {
    params,
    headers,
  };
  let response = {};
  try {
    response = await apiService.post('/v1/otp/call', body, options);
  } catch (err) {
    throw new INTERNAL_SERVER_ERROR();
  }
  const { success, data: result, error } = response.data;
  if (success) {
    return result;
  } else {
    const { code, key, message } = error;
    throw new APP_SERVER_ERROR({ code, key, message });
  }
};

const sendOTPOverSms = async ({ headers, body = null, params = null }) => {
  const options = {
    params,
    headers,
  };
  let response = {};
  try {
    response = await apiService.post('/v1/otp/sms', body, options);
  } catch (err) {
    throw new INTERNAL_SERVER_ERROR();
  }
  const { success, data: result, error } = response.data;
  if (success) {
    return result;
  } else {
    const { code, key, message } = error;
    throw new APP_SERVER_ERROR({ code, key, message });
  }
};

module.exports = {
  healthcheck,
  verifyOTP,
  sendOTPOverCall,
  sendOTPOverSms,
};
