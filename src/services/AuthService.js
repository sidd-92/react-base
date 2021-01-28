import axios from "axios";

class AuthService {
  constructor() {}

  login() {
    localStorage.setItem("userInfo", { token: "Bearer" });
  }

  getUserInfo() {
    if (localStorage.getItem("userInfo")) {
      return JSON.parse(localStorage.getItem("userInfo"));
    } else {
      return "";
    }
  }
}

export default new AuthService();
