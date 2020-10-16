import React from 'react';
import './Sidebar.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShoppingBag, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';


const AdminSidebar = () => {
  return (
    <div className="sidebar-div">
      <Link to="/">
        <img
          className="imgAdmin mt-4"
          src="https://i.imgur.com/C2lhwy9.png"
          height="50"
          width="150"
          alt="" />
      </Link>
      < br />
      < br />
      <Link to='/admin'>
        <Button
          className="sidebar-btn"
          variant="light">
          <FontAwesomeIcon
            className="icon-style"
            icon={faShoppingBag} />
            Service list
        </Button>
      </Link>
      <br />
      <Link to='/addService'>
        <Button
          className="sidebar-btn"
          variant="light">
          <FontAwesomeIcon
            className="icon-style"
            icon={faPlus} />
          Add  Service
        </Button>
      </Link>
      <br />
      <Link to='/makeAdmin'>
        <Button
          className="sidebar-btn"
          variant="light">
          <FontAwesomeIcon
            className="icon-style"
            icon={faUserPlus} />
            Make Admin
        </Button>
      </Link>
    </div>
  );
};

export default AdminSidebar;