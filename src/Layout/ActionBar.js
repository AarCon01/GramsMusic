import React, { useState } from "react";

import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./ActionBar.css";

const ActionBar = (props) => {
  const [expanded, setExpanded] = useState(false);

  // Unpack any actions we have been passed and turn them into Nav Links
  const navItems = [];
  if (props.actions) {
    for (const [linkName, path] of Object.entries(props.actions)) {
      navItems.push(
        <Nav.Link as={NavLink} to={path} key={linkName} end={path === ""}>
          {linkName}
        </Nav.Link>
      );
    }
  }

  // Build the ActionBar
  return (
    <Navbar id="action-bar" expand="md" expanded={expanded}>
      <Navbar.Brand>{props.name}</Navbar.Brand>
      <Navbar.Toggle
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />
      <Navbar.Collapse>
        <Nav onClick={() => setExpanded(false)}>{navItems}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

ActionBar.propTypes = {
  /**
   * Name to display in the Navbar.Brand. Typically the name of the active module.
   */
  name: PropTypes.string,
  /**
   * Dictionary for populating action bar. The key is the name that will appear on the bar,
   * with the value being the URL it will point to.
   */
  actions: PropTypes.object,
};

export default ActionBar;
