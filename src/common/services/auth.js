const { LOAD_BALANCER } = require('../../config');
const {
  ErrorHandler: { INTERNAL_SERVER_ERROR },
} = require('../libs');

const RequestHandler = require('../libs/RequestHandlerOld');

const config = {
  baseURL: `${LOAD_BALANCER}/auth/apis`,
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

const Token = async ({ headers, params = null }) => {
  try {
    const { userId } = params;
    const options = {
      headers,
    };
    const { data } = await apiService.get(`/v1/token/${userId}`, options);
    return data;
  } catch (error) {
    throw new INTERNAL_SERVER_ERROR(error);
  }
};

module.exports = {
  healthcheck,
  Token,
};
