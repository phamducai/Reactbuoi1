import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import style from "./Header.module.css";
import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <Navbar style={{ backgroundColor: "rgb(53 58 64)" }} expand="lg">
        <Container>
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            Start Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link
                href="#link"
                style={{ color: "white" }}
                className={style.link}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#home"
                style={{ color: "white" }}
                className={style.link}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#link"
                style={{ color: "white" }}
                className={style.link}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
