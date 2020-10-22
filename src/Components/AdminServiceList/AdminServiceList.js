import React, { useContext, useEffect, useState } from 'react';
import './AdminServiceList.css';
import { UserContext } from '../../App'
import { Table } from 'react-bootstrap';


const AdminServiceList = () => {
  const { loggedInUser,setUpdate } = useContext(UserContext)
  const [customer, setCustomer] = useState([])
  useEffect(() => {
    fetch('https://sheltered-inlet-71328.herokuapp.com/servicesList')
      .then(res => res.json())
      .then(data => setCustomer(data))
  }, [])


  const handleChange = (e,id) => {
    const status = e.value;
            fetch(`https://sheltered-inlet-71328.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                  alert('Status updated successfully')
                  setUpdate(data)
                }
            })
              .catch(error => {
                console.log(error)
    })
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
            {/* <th>Status</th> */}
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
                {/* <td>
                    <select name="status"
                    id="status"
                    onChange={(e) => { handleChange(e, `${item._id}`) }}>
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
                </td> */}
              </tr>
            )}
        </tbody>
      </Table>
    </>
  );
};

export default AdminServiceList;