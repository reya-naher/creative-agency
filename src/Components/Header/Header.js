import React from 'react';
import './Header.css';
import { Button, Container } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div className="header">
      <Container>
        <NavBar></NavBar>
        <div className="row">
          <div className="col-md-6 col-sm-12 col-12 p-5">
            <h1>
              <b>
                Let's Grow Your <br />Brand To The <br /> Next Level
                </b>
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae eveniet sunt officia, nulla animi vitae id dolore velit et.</p>
            <Link to="/login">
              <Button
                className="pl-5 pr-5"
                variant="dark">
                Hire Us
                </Button>
            </Link>
          </div>
          <div className="col-md-6 col-sm-12 col-12">
            <img
              src="https://i.imgur.com/Zpal5TP.png"
              alt=""
              srcSet=""
              height="100%"
              width="100%" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;