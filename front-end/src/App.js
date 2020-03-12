import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage'
import Registration from './components/qRegistration';
import QutterReg from './components/qutterRegistration'

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/"><LandingPage /></Route>
    <Route exact path="/register"><Registration/></Route>
    <Route exact path="/qutregister"><QutterReg/></Route>
    </Switch>
    </div>
  );
}

export default App;
