import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class Banner extends Component {
  render() {
    return (
      <Container>
        <Card border="primary" className="mt-4">
          <Card.Body className="py-5">
            <h1>A Warm Welcome</h1>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              architecto beatae quae, eos saepe aliquam sit non eligendi
              reprehenderit enim incidunt illum possimus voluptatum voluptate
              vitae unde nostrum deleniti quia?
            </Card.Text>
            <Button variant="primary">Cart to action!</Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
