const axios = require('axios').default;

class RequestHandler {
  constructor(config) {
    this.axios = axios.create(config);
  }

  /**
   * @param url:{String}, api path
   * @param method:{String}, HTTP method : (e.g. GET as default, POST, PUT, DELETE)
   * @param data: {Object}, Request Body
   * @param headers: {Object}, `headers` are custom headers to be sent
   * @param params: {Object}, `params` are the URL parameters to be sent with the request
   * @returns
   */
  async get(url, options) {
    const response = await this.axios.get(url, options);
    return response;
  }

  async post(url, data, options) {
    // console.log(url, data, options); request body == data
    const response = await this.axios.post(url, data, options);
    return response;
  }

  async put(url, data, options) {
    const response = await this.axios.put(url, data, options);
    return response;
  }

  async delete(url, data, headers) {
    const response = await this.axios.delete(url, {
      headers,
      data,
    });
    return response;
  }
}
module.exports = RequestHandler;
