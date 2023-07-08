import axios from "axios";
import API_BASE_URL from "../constants";

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl;
    this.token = null;
  }

  // set JWT
  setToken(token) {
    this.token = token;
  }

  /**
   * Utility method to make HTTP requests using axios
   *
   * @param {String endpoint, String method, data = Object} param0
   * @returns HTTP Method result
   */
  async request({ endpoint, method, data = {} }) {
    // construct url to given endpoint
    const url = `${API_BASE_URL}/${endpoint}`;

    // dynamic params for GET request
    const params = method === "get" ? data : {};

    const headers = { "Content-Type": "application/json" };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    try {
      const res = await axios({ url, method, data, params, headers });
      console.log(`res is ${res.data}`);
      return { data: res.data, params: params, error: null, message: null };
    } catch (e) {
      console.error("APIClient make request error", e.response);
      if (e.response.status === 404) return { data: null, error: "Not Found" };
      return {
        data: null,
        error: e.response,
        message: e.response.data.error.message,
      };
    }
  }

  async login(creds) {
    return await this.request({
      endpoint: `auth/login`,
      method: `POST`,
      data: creds,
    });
  }

  async register(creds) {
    return await this.request({
      endpoint: `auth/register`,
      method: `POST`,
      data: creds,
    });
  }

  async getSleepRows(userId) {
    return await this.request({
      endpoint: `sleep/${userId}`,
      method: `GET`,
    });
  }

  async createSleepEntry(creds) {
    return await this.request({
      endpoint: `sleep/create`,
      method: `POST`,
      data: creds,
    });
  }
}

export default new ApiClient(API_BASE_URL);
