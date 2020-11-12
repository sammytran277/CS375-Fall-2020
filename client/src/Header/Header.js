import React, { useState } from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";

const Header = (props) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(userInput);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
