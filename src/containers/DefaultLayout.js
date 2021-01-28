import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../routes";
import AuthValidator from "../components/AuthValidator/AuthValidator";

class DefaultLayout extends Component {
  render() {
    return (
      <main>
        <Suspense fallback={<div>Loading..</div>}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <AuthValidator
                      authorizedcomponent={route.component}
                      urlpath={route.path}
                      {...props}
                    />
                  )}
                />
              ) : null;
            })}
            <Redirect from="/" to="/login" />
          </Switch>
        </Suspense>
      </main>
    );
  }
}

export default DefaultLayout;
