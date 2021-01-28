class AuthService {
  login() {
    localStorage.setItem("userInfo", JSON.stringify({ token: "Bearer" }));
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
