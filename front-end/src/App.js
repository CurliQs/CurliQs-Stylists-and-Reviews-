import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/External Pages/Marketing";
import QRegister from "./components/Register/QRegister";
import QutterReg from "./components/qutterRegistration";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/register">
          <QRegister />
        </Route>
        <Route exact path="/qutregister">
          <QutterReg />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
