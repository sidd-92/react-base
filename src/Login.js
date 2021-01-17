import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import React from "react";
import piggyBank from "./assets/img/piggy-bank.png";
import SocialLoginButton from "./components/SocialLoginButton/SocialLoginButton";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.nodes = {};
    this.state = {
      value: "",
    };
  }

  setNodeRef(provider, node) {
    if (node) {
      this.nodes[provider] = node;
    }
  }
  render() {
    return (
      <div className="w-full">
        <div className="font-bold text-3xl text-center my-2">
          Expense Manager
        </div>
        <div className="font-hairline text-md text-center my-2">
          Manage all your expenses here!
        </div>
        <div className="w-full flex justify-center">
          <img src={piggyBank} alt="iconLogo" className="w-1/3" />
        </div>
        <Card className="w-full h-500px fixed bottom-0 left-auto">
          <div className="text-2xl font-bold text-center text-white mt-6">
            Login
          </div>
          <div className="w-full px-2">
            <div className=" mt-4">
              <label htmlFor="in">Username</label>
              <InputText
                id="in"
                className="w-full"
                value={this.state.value}
                onChange={(e) => this.setState({ value: e.target.value })}
              />
            </div>
            <div className=" mt-4">
              <label htmlFor="pwd">Password</label>
              <Password
                className="w-full"
                feedback={false}
                id="pwd"
                value={this.state.pwd}
                onChange={(e) => this.setState({ pwd: e.target.value })}
              />
            </div>
            <div className="w-full mt-10">
              <Button
                label="Login"
                className="bg-secondary border-0 text-white font-bold w-full"
              />
            </div>
            <div className="flex items-center w-full justify-center mt-1 font-thin text-sm">
              <div className="text-white">Already A User ?</div>
              <div className="text-primary hover:text-white ml-1 underline">
                Sign Up
              </div>
            </div>
            <div className="text-center my-5">Or</div>
            <div className="w-full flex justify-between items-center">
              <SocialLoginButton
                provider="google"
                appId="931128188745-b8not07qakbsv13192kk7ru0cgpmks04.apps.googleusercontent.com"
                onLoginSuccess={(user) => {
                  console.log("USERINFO", user);
                  this.setState({ userLogged: true, userInfo: user });
                }}
                onLoginFailure={(err) => {
                  console.log(err, "Login Error");
                  this.setState({ userLogged: false, userInfo: "" });
                }}
                onLogoutSuccess={() => {
                  console.log("Logout Success");
                  this.setState({
                    logged: false,
                    currentProvider: "",
                    user: {},
                  });
                  localStorage.clear();
                }}
                onLogoutFailure={(err) => {
                  console.error(err, "Logout Error");
                }}
                getInstance={this.setNodeRef.bind(this, "google")}
              >
                <div className="w-full">
                  {this.state.userLogged ? (
                    <Button
                      onClick={(e) => {
                        const { userLogged, userInfo } = this.state;
                        if (userLogged && userInfo._provider) {
                          debugger;
                          this.nodes[userInfo._provider].props.triggerLogout();
                        }
                      }}
                      icon="pi pi-google"
                      className="w-full bg-bg-google text-white border-0"
                      label={`Logout ${this.state.userInfo._profile.firstName}`}
                    ></Button>
                  ) : (
                    <Button
                      icon="pi pi-google"
                      className="w-full bg-bg-google text-white border-0"
                      label="Sign In Using Google"
                    ></Button>
                  )}
                </div>
              </SocialLoginButton>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Login;
