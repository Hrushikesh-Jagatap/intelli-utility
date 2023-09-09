const { LOAD_BALANCER } = require('../../config');
const {
  ErrorHandler: { INTERNAL_SERVER_ERROR },
} = require('../libs');

const RequestHandler = require('../libs/RequestHandlerOld');

const config = {
  baseURL: `${LOAD_BALANCER}/ums/apis`,
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
  try {
    const options = {
      params,
      headers,
    };
    const { data } = await apiService.post('/v1/users/verify_otp', body, options);
    return data;
  } catch (error) {
    throw new INTERNAL_SERVER_ERROR(error);
  }
};

const sendOTP = async ({ headers, body = null, params = null }) => {
  try {
    const options = {
      params,
      headers,
    };
    const { data } = await apiService.post('/v1/users/send_otp', body, options);
    return data;
  } catch (error) {
    throw new INTERNAL_SERVER_ERROR(error);
  }
};

const getAllUsersDetails = async ({ headers, params = null }) => {
  try {
    const options = {
      headers,
    };
    const { data } = await apiService.get('/v1/users', options);
    return data;
  } catch (error) {
    throw new INTERNAL_SERVER_ERROR(error);
  }
};

const getUserDetails = async ({ headers, params = null }) => {
  try {
    const { userId } = params;
    const options = {
      headers,
    };
    const { data } = await apiService.get(`/v1/users/${userId}`, options);
    return data;
  } catch (error) {
    throw new INTERNAL_SERVER_ERROR(error);
  }
};

const updateUserDetails = async ({ headers, body = null, params = null }) => {
  try {
    const { userId } = params;
    const options = {
      headers,
    };
    const { data } = await apiService.put(`/v1/users/${userId}`, body, options);
    return data;
  } catch (error) {
    throw new INTERNAL_SERVER_ERROR(error);
  }
};

const deleteUser = async ({ headers, body = null, params = null }) => {
  try {
    const { userId } = params;
    const { data } = await apiService.delete(`/v1/users/${userId}`, body, headers);
    return data;
  } catch (error) {
    throw new INTERNAL_SERVER_ERROR(error);
  }
};

const checkifUserRegistered = async ({ headers, body = null, params = null }) => {
  try {
    const options = {
      headers,
    };
    const { data } = await apiService.post(`/v1/users/check_if_reg`, body, options);
    return data;
  } catch (error) {
    throw new INTERNAL_SERVER_ERROR(error);
  }
};

module.exports = {
  healthcheck,
  verifyOTP,
  sendOTP,
  getAllUsersDetails,
  getUserDetails,
  updateUserDetails,
  deleteUser,
  checkifUserRegistered,
};
