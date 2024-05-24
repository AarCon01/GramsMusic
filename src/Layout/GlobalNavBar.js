import React from "react";

import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./GlobalNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const GlobalNav = () => {
  return (
    <>
      <Navbar sticky="top" id="nav-top-bar" expand="md">
        <Navbar.Brand href="/" style={{paddingLeft: "1rem" }}>
          <FontAwesomeIcon icon={faHouse} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offCanvasNav" style={{paddingRight: "1rem"}} />
        <Navbar.Offcanvas id="offCanvasNav" placement="top">
          <Offcanvas.Body>
            <Nav>
              <Nav.Link as={NavLink} to="/originals">
                Gram Originals
              </Nav.Link>
              <Nav.Link as={NavLink} to="/luau">
                Luau
              </Nav.Link>
              <Nav.Link as={NavLink} to="/jam">
                Jam Session
              </Nav.Link>
              <Nav.Link as={NavLink} to="/classical">
                Classical
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
};
export default GlobalNav;
