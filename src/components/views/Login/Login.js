import React from "react";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Login = () => {
  return (
    <div className="mx-auto max-w-lg">
      <div className="font-bold text-4xl mt-10">Pool Carz</div>
      <div className="font-thin text-2xl">Book a Ride or Offer a Ride</div>
      <div className="p-fluid mt-10">
        <div className="p-field">
          <label htmlFor="username">Username</label>
          <InputText id="username" type="text" />
        </div>
        <div className="p-field mb-10">
          <label htmlFor="password">Password</label>
          <InputText id="password" type="password" />
        </div>
        <Button label="Login"></Button>
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
};

export default Login;
