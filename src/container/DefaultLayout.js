import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthValidator from "../components/AuthValidator";
import { ProgressSpinner } from "primereact/progressspinner";
import routes from "../routes";

class DefaultLayout extends Component {
  render() {
    return (
      <main>
        <Suspense fallback={<ProgressSpinner />}>
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
            <Redirect from="/" to="/404" />
          </Switch>
        </Suspense>
      </main>
    );
  }
}

export default DefaultLayout;
