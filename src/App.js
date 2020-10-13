import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route>
          
        </Route>
      </Switch>

</Router>
  );
}

export default App;
