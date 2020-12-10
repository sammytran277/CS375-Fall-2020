import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      className="d-flex py-3 justify-content-center"
      style={{ color: "white" }}
    >
      <div>
        Made with <span style={{ color: "red" }}>&hearts;</span> by ms.js!
      </div>
    </Navbar>
  );
};

export default Footer;
