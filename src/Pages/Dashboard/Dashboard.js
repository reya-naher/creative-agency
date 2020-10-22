import React, { useContext } from 'react';
import './Dashboard.css';
import { useParams } from 'react-router-dom';
import CustomerOrder from '../../Components/CustomerOrder/CustomerOrder';
import Admin from '../../Components/Admin/Admin';
import { UserContext } from '../../App';
import { useState } from 'react';
import { useEffect } from 'react';


const Dashboard = () => {
  const {loggedInUser} = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const { work } = useParams();

  useEffect(() => {
    fetch('https://sheltered-inlet-71328.herokuapp.com/isAdmin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email })
    })
      .then(res => res.json())
      .then(data => setIsAdmin(data))
  }, [])

  return (
    <>
      {
        isAdmin && loggedInUser.email && <Admin></Admin> 
      }
        
      {
       !isAdmin && loggedInUser.email && <CustomerOrder work={work}></CustomerOrder>
      }
    </>

  );
};

export default Dashboard;