import "./App.css";
import Dashboard from "./Dashboard";
import SignInOutContainer from "./components/container/index";

import { Redirect, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SignInOutContainer} />
        {/* <Route exact  path="/signup" component={Perfect} />
<Route exact  path="/login" component={login} /> */}
        <Route exact path="/dashboard" component={Dashboard} />

        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
