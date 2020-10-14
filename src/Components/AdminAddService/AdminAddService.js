import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './AdminAddService.css';

const AdminAddService = () => {
  const [info, setInfo] = useState({})
  const [file, setFile] = useState(null);
  
  const handleBlur = e => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo)   
  }
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile)
  }

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('name', info.name)
    formData.append('description', info.description)
  
    fetch('http://localhost:5000/adminAddService', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <div>
      <h1>Add Service</h1>
      <form onSubmit={handleSubmit}>
              <input onBlur={handleBlur} type="text" name="name" className="input-footer m-2 p-2" id="name" placeholder="Service Name"/>
              <br />
              <textarea onBlur={handleBlur} className="m-2 p-2" placeholder="Description" name="description" id="description" cols="50" rows="3"></textarea>
        <br />
        {/* <label htmlFor="file upload" className="style-file-btn">Upload</label>
        <input onChange={handleFileChange} className="order-fil-upload m-2 p-2" type="file" name="project file" id="" /> */}

        
            <input onChange={handleFileChange} type="file" className=" m-2 p-2"  name="project file" id="" />
        <br />
              <Button type="submit" className="m-2" variant="dark">Send</Button>
            </form>
    </div>
  );
};

export default AdminAddService;