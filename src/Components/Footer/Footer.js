import React from 'react';
import './Footer.css';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer pt-5 mt-5">
      <Container>
        <Row className="p-5">
          <Col md={6} sm={12} xs={12}>
            <h1>
              <b>Let Us Handle Your <br /> Project,Professionally</b>
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis optio natus qui accusantium est tempore Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis optio natus qui accusantium est tempore!</p>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <form>
              <input
                type="email"
                name="email"
                className="input-footer email m-2 p-2"
                id="email"
                placeholder="Your Email Address" />
              <br />
              <input
                type="text"
                name="email"
                className="input-footer m-2 p-2"
                id="name"
                placeholder="Your Name/Company's name" />
              <br />
              <textarea
                className="m-2 p-2"
                placeholder="Your Message"
                name="message"
                id="msg"
                cols="50"
                rows="5">
              </textarea>
              <br />
              <Button
                type="submit"
                className="m-2"
                variant="dark">
                Send
                </Button>
            </form>
          </Col>
        </Row>
        <div className="text-center p-2">
          <p>CopyRight Creative Agency {(new Date()).getFullYear()} All Rights Reserved</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;