import React from 'react';
import './Sidebar.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const CustomerSidebar = () => {

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
      <br />
      < br />
      <Link to='/order'>
        <Button
          className="sidebar-btn"
          variant="light">
          <FontAwesomeIcon
            className="icon-style"
            icon={faShoppingCart} />
            Orders
            </Button>
      </Link>
      <br />
      <Link to='/customerServiceList'>
        <Button
          className="sidebar-btn"
          variant="light">
          <FontAwesomeIcon
            className="icon-style"
            icon={faShoppingBag} />
            Service List
            </Button>
      </Link>
      <br />
      <Link to='/review'>
        <Button
          className="sidebar-btn"
          variant="light">
          <FontAwesomeIcon
            className="icon-style"
            icon={faCommentDots} />
            Review
            </Button>
      </Link>
    </div>
  );
};

export default CustomerSidebar;