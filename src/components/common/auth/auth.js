import {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GITHUB_REDIRECT_URI
} from "../../../config";

class Auth {
  constructor() {
    this.clientId = GITHUB_CLIENT_ID;
    this.clientSecret = GITHUB_CLIENT_SECRET;
    this.redirectURI = GITHUB_REDIRECT_URI;
  }

  getAuthUrl() {
    return `https://github.com/login/oauth/authorize?client_id=${
      this.clientId
    }&scope=user&redirect_uri=${this.redirectURI}`;
  }
}

const auth = new Auth();

export default auth;
