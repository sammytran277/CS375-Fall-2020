import React, { useState } from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";

import "./Header.css";
import logo from "./logo.svg";

const Header = (props) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(userInput);
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          className="logo"
          height="50px"
          width="50px"
          src={logo}
          alt="Sun and clouds"
        ></img>
        Instant Weather
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Form inline onSubmit={handleSubmit}>
          <FormControl
            type="text"
            placeholder="Search by zip code"
            className="mr-sm-2"
            onChange={(e) => setUserInput(e.target.value)}
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
