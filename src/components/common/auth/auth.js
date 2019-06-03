import axios from "axios";
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

  handleAuthentication(code) {
    return new Promise((resolve, reject) => {
      const url = `http://localhost:9000/authenticate?code=${code}`;
      axios
        .get(url)
        .then(response => {
          const token = response.data;
          // handle success
          console.log(token);
          if (!token) {
            resolve(false);
          }
          this.setSession(token);
          resolve(true);
        })
        .catch(error => {
          // handle error
          console.log(error);
          reject(error);
        });
    });
  }

  setSession(token) {
    this.token = token;
  }
}

const auth = new Auth();

export default auth;
