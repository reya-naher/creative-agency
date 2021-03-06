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
import AdminMake from './Components/AdminMake/AdminMake';
import Admin from './Components/Admin/Admin';
import NoMatch from './Components/NoMatch/NoMatch';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [update, setUpdate] = useState('pending')

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser,update,setUpdate }}>
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
          <Route path='/customerServiceList'>
          <CustomerServiceList></CustomerServiceList>
          </Route>
          <Route path='/review'>
          <CustomerReview></CustomerReview>
          </Route>
          <PrivateRoute path="/customer/:work">
             <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='/admin'>
          <Admin></Admin>
          </Route>
          <Route path='/addService'>
          <AdminAddService></AdminAddService>
          </Route>
          <Route path='/makeAdmin'>
          <AdminMake></AdminMake>
          </Route>
          <Route path='*'>
          <NoMatch></NoMatch>
          </Route>
      </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
