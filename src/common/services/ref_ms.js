const { LOAD_BALANCER } = require('../../config');
const {
  ErrorHandler: { INTERNAL_SERVER_ERROR },
} = require('../libs');
const RequestHandler = require('../libs/RequestHandlerOld');

const config = {
  baseURL: `${LOAD_BALANCER}/ref_ms/apis`,
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

const onStatusUpdate = async ({ headers, body = null, params = null }) => {
  try {
    const { authorization } = headers;
    const options = {
      params,
      headers: { authorization },
    };
    console.group(options);
    const { data } = await apiService.put('/v1/ref', body, options);
    return data;
  } catch (error) {
    throw new INTERNAL_SERVER_ERROR(error);
  }
};

module.exports = {
  healthcheck,
  onStatusUpdate,
};
