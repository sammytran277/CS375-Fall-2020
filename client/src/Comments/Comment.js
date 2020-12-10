import React from "react";
import { Card } from "react-bootstrap";

const Comment = ({ text }) => {
  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Comment;