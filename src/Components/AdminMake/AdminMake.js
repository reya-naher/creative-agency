import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
const AdminMake = () => {
  const { register, handleSubmit, errors } = useForm();  
  const onSubmit = data => {
    const addAdminData = data
    fetch('http://localhost:5000/addAdmins', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify(addAdminData)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('New Admin Added!')
          // history.push('/customerlist');
      }
    })
  }
  // console.log(info)
  return (
    <div>
      <h1>Make Admin</h1>
      <form  onSubmit={handleSubmit(onSubmit)}>
      <input
            name="email"
            className="order-input m-2 p-2"
            ref={register({ required: true })}
            placeholder="Your Email Address" />
          {errors.email && <span className="error">
          Email is required</span>} 
        
        <Button type="submit">Submit</Button>
        </form>
    </div>
  );
};

export default AdminMake;