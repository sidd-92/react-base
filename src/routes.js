import React from "react";

//links
export const linkLogin = "/login";
//authenticated links
export const linkPageHome = "/rides/home";
//linknames
export const linkNameHome = "Home";
export const linkNameLogin = "Login";

//imports
const Home = React.lazy(() => import("./components/views/Home"));
const routes = [
  {
    path: linkPageHome,
    exact: true,
    name: linkNameHome,
    component: Home,
  },
];

export default routes;
