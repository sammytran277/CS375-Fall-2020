import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Comment from "./Comment";

const axios = require("axios");

const Comments = ({ zipCode }) => {
  const [currComment, setCurrComment] = useState("");

  const comments = ["Woah it is so warm", "I love Saturday!", "Summer fun!"];
  const styles = {
    marginTop: "50px",
    paddingLeft: "25px",
    paddingRight: "25px",
    marginBottom: "25px",
  };

  const handleChange = (e) => {
    setCurrComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitted: ${currComment} and ${zipCode}`);
    axios.post("http://localhost:5000/comment", { "comment": currComment, "zip": zipCode });
  };

  return (
    <div style={styles}>
      <h3>Comments about this weather forecast:</h3>
      {comments.map((c) => (
        <Comment text={c}></Comment>
      ))}
      <Form onSubmit={handleSubmit}>
        <div className="d-flex">
          <Form.Control
            type="text"
            placeholder="Enter your comment here!"
            onChange={handleChange}
          ></Form.Control>
          <div className="mx-2"></div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Comments;
