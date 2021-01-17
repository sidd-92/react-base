import React from "react";

//links
export const linkLogin = "/";
export const linkSignup = "/signup";
export const linkForgotPassword = "/forgotpassword";
//authenticated links
export const linkPageOverview = "/expense/overview";
export const linkPageProfile = "/expense/profile";
//linknames
export const linkNameSignup = "Sign Up";
export const linkNameForgotPassword = "Forgot Password";

//imports
const PageOverview = React.lazy(() => import("./Main"));
const PageProfile = React.lazy(() => import("./Profile"));
const routes = [
  {
    path: linkPageOverview,
    exact: true,
    name: "Overview",
    component: PageOverview,
  },
  {
    path: linkPageProfile,
    exact: true,
    name: "Profile",
    component: PageProfile,
  },
];

export default routes;
