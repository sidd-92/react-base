import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/views/Login";
import { linkLogin, linkPageHome } from "./routes";

const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));
const Page404 = React.lazy(() => import("./components/views/Page404"));
class App extends React.Component {
  render() {
    return (
      <Router basename="/">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/login"
              name="Login"
              render={(props) => <Login {...props} />}
            />
            <Route
              path="/"
              name="Home"
              render={(props) => <DefaultLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
