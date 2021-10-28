import "./App.css";
import Dashboard from "./Dashboard";
import AdminContainer from "./components/containers/AdminContainer/index";
import MerchatContainer from "./components/containers/MerchatContainer/index";
import CustomerContainer from "./components/containers/CustomerContainer/index";
import Table from "./components/forms/Customers/Table";

import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
// import Table from "./components/pages/Table";
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/admin" component={AdminContainer} />
        <Route exact path="/merchant" component={MerchatContainer} />
        <Route exact path="/customer" component={CustomerContainer} />

        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/table" component={Table} />

        <Redirect to="/customer" />
      </Switch>
    </>
  );
};

export default App;
