import React, { useEffect, useState } from 'react';
import './AdminServiceList.css';

const AdminServiceList = () => {
  const [customer, setCustomer] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/servicesList')
      .then(res => res.json())
      .then(data => setCustomer(data))
  }, [])
  return (
    <>
      <h1>Service List</h1>
        <table className="volunteers">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Services</th>
              <th>Project Details</th>
              <th>Status</th>
            </tr>
            {
              customer.map((item, index) =>
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.work}</td>
                  <td>{item.details}</td>
                  <td>{index + 1}</td>
                </tr>
              )}
          </table>
    </>
  );
};

export default AdminServiceList;