import axios from "axios";
import API_BASE_URL from "../constants";

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl;
    this.token = null;
  }

  setToken(token) {
    this.token = token;
  }

  async request() {
    const res = await axios.get(this.remoteHostUrl);
    return res.data;
  }
}

module.exports = new ApiClient();
