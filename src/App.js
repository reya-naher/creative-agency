import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import CustomerServiceList from './Components/CustomerServiceList/CustomerServiceList';
import Dashboard from './Pages/Dashboard/Dashboard';
import CustomerReview from './Components/CustomerReview/CustomerReview';
import CustomerOrder from './Components/CustomerOrder/CustomerOrder';
import AdminAddService from './Components/AdminAddService/AdminAddService';
import AdminServiceList from './Components/AdminServiceList/AdminServiceList';
import AdminMake from './Components/AdminMake/AdminMake';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
          </Route>
          <Route path='/order'>
          <CustomerOrder></CustomerOrder>
          </Route>
          <Route path='/customerservicelist'>
          <CustomerServiceList></CustomerServiceList>
          </Route>
          <Route path='/review'>
          <CustomerReview></CustomerReview>
          </Route>
          <PrivateRoute path="/customer/:work">
             <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='/adminallservice'>
          <AdminServiceList></AdminServiceList>
          </Route>
          <Route path='/addservice'>
          <AdminAddService></AdminAddService>
          </Route>
          <Route path='/makeadmin'>
          <AdminMake></AdminMake>
          </Route>
      </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
