import React from "react";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import AuthService from "../../../services/AuthService";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showErrorMessage: false,
      showEmptyError: false,
    };
  }
  render() {
    return (
      <div className="mx-auto max-w-lg">
        <div className="font-bold text-4xl mt-10">Pool Carz</div>
        <div className="font-thin text-2xl">Book a Ride or Offer a Ride</div>
        <div className="p-fluid mt-10">
          <div className="p-field">
            <label htmlFor="username">Username</label>
            <InputText
              id="username"
              className={this.state.showEmptyError ? "p-invalid" : ""}
              type="text"
            />
            {this.state.showEmptyError ? (
              <small id="username-help" className="p-invalid p-d-block">
                Username is Empty.
              </small>
            ) : (
              ""
            )}
          </div>
          <div className="p-field mb-10">
            <label htmlFor="password">Password</label>
            <InputText
              id="password"
              type="password"
              className={this.state.showEmptyError ? "p-invalid" : ""}
            />
            {this.state.showEmptyError ? (
              <small id="username-help" className="p-invalid p-d-block">
                Password is Empty.
              </small>
            ) : (
              ""
            )}
          </div>
          {this.state.showErrorMessage ? (
            <div className="text-md font-medium text-red-600">
              Invalid Credentials
            </div>
          ) : (
            ""
          )}

          <Button
            onClick={() => {
              AuthService.login();
              this.props.history.push("/rides/home");
            }}
            label="Login"
          ></Button>
        </div>
        <div className="my-16">
          <Divider align="center">
            <div>OR</div>
          </Divider>
        </div>
        <div className="flex justify-center">
          <Button
            label="Sign Up"
            icon="pi pi-user-plus"
            className="p-button-success"
          ></Button>
        </div>
      </div>
    );
  }
}

export default Login;
