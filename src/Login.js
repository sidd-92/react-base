import React from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import piggyBank from "./assets/img/piggy-bank.png";
import SocialLoginButton from "./components/SocialLoginButton/SocialLoginButton";
import { Button } from "primereact/button";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
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
              <div>Already A User ?</div>
              <div className="text-primary hover:text-white ml-1 underline">
                Sign Up
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <SocialLoginButton
                provider="google"
                appId="931128188745-b8not07qakbsv13192kk7ru0cgpmks04.apps.googleusercontent.com"
                onLoginSuccess={() => {
                  alert("Success");
                }}
                onLoginFailure={() => {
                  alert("Failed");
                }}
              >
                <div className="w-full">
                  <Button
                    icon="pi pi-google"
                    className="w-full bg-bg-google text-white border-0"
                    label="Sign In Using Google"
                  ></Button>
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
