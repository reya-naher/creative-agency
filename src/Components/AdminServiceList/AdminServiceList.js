import React, { useContext, useEffect, useState } from 'react';
import './AdminServiceList.css';
import { UserContext } from '../../App'
import { Table } from 'react-bootstrap';

const AdminServiceList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [customer, setCustomer] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/servicesList')
      .then(res => res.json())
      .then(data => setCustomer(data))
  }, [])

  const handleChange = (e) => {
    // console.log(e.target.value)
  }

  return (
    <>
      <h3 className="mt-4">
        Services List
        </h3>
      <h5 style={{ textAlign: 'right' }}>
        {loggedInUser.name}
      </h5>
      <Table className="customers" responsive="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Services</th>
            <th>Project Details</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            customer.map((item, index) =>
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.work}</td>
                <td>{item.details}</td>
                <td>
                  <select name="status"
                    id="status"
                    onChange={handleChange}>
                    <option
                      className="text-danger"
                      value="pending">
                      pending
                      </option>
                    <option
                      className="text-success"
                      value="done">
                      Done
                      </option>
                    <option
                      className="text-warning"
                      value="on going">
                      On going
                      </option>
                  </select>
                </td>
              </tr>
            )}
        </tbody>
      </Table>
    </>
  );
};

export default AdminServiceList;