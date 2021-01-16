import React from "react";
import Main from "./Main";
import Profile from "./Profile";
import Categories from "./Categories";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router basename="/">
          <React.Suspense fallback={<ProgressSpinner />}>
            <Switch>
              <Route
                exact
                path={"/"}
                name={"Main"}
                render={(props) => <Main {...props} />}
              />
              <Route
                exact
                path={"/profile"}
                name={"Main"}
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
