const { LOAD_BALANCER } = require('../../config');
const {
  ErrorHandler: { INTERNAL_SERVER_ERROR },
} = require('../libs');
const RequestHandler = require('../libs/RequestHandlerOld');

const config = {
  baseURL: `${LOAD_BALANCER}/rms/apis`,
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

const getAllShopViaUserId = async ({ headers, body = null, params = null }) => {
  try {
    const options = {
      headers,
      data: JSON.stringify(body),
    };
    const { data } = await apiService.get('/v1/shop', options);
    return data;
  } catch (error) {
    throw new INTERNAL_SERVER_ERROR(error);
  }
};

module.exports = {
  healthcheck,
  getAllShopViaUserId,
};
