const axios = require('axios').default;
const { systemToken, sessionName } = require('../../../config');
const { getNamespace } = require('cls-hooked');

class RequestHandler {
  /**
   * @param url:{String}, api path
   * @param method:{String}, HTTP method : (e.g. GET as default, POST, PUT, DELETE)
   * @param data: {Object}, Request Body
   * @param headers: {Object}, `headers` are custom headers to be sent
   * @param params: {Object}, `params` are the URL parameters to be sent with the request
   * @returns
   */

  static async get({ url, params }) {
    const options = {
      headers: {
        Authorization: `Bearer ${systemToken}`,
        sessionid: getNamespace(sessionName).get('sessionId'),
      },
      params,
    };
    const response = await axios.get(url, options);
    const { data: result } = response;
    return result;
  }
  static async post({ url, data }) {
    const options = {
      headers: {
        Authorization: `Bearer ${systemToken}`,
        // sessionid: getNamespace(sessionName).get('sessionId'),
      },
    };
    const response = await axios.post(url, data, options);
    const { data: result } = response;
    return result;
  }

  static async put({ url, data }) {
    const options = {
      headers: {
        Authorization: `Bearer ${systemToken}`,
        sessionid: getNamespace(sessionName).get('sessionId'),
      },
    };
    const response = await axios.put(url, data, options);
    const { data: result } = response;
    return result;
  }

  static async delete({ url, data }) {
    const options = {
      headers: {
        Authorization: `Bearer ${systemToken}`,
        sessionid: getNamespace(sessionName).get('sessionId'),
      },
    };
    const response = await axios.delete(url, data, options);
    const { data: result } = response;
    return result;
  }
}
module.exports = RequestHandler;
