import React from "react";
import Main from "./Main";
import Profile from "./Profile";
import Categories from "./Categories";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import { ProgressSpinner } from "primereact/progressspinner";
import { linkPageOverview, linkPageProfile } from "./routes";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router basename="/">
          <React.Suspense fallback={<ProgressSpinner />}>
            <Switch>
              <Route
                exact
                path={"/login"}
                name={"Main"}
                render={(props) => <Login {...props} />}
              />
              <Route
                exact
                path={linkPageOverview}
                name={"Main"}
                render={(props) => <Main {...props} />}
              />
              <Route
                exact
                path={linkPageProfile}
                name={"Profile"}
                render={(props) => <Profile {...props} />}
              />
              <Route
                exact
                path={"/categories"}
                name={"Main"}
                render={(props) => <Categories {...props} />}
              />
            </Switch>
          </React.Suspense>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
