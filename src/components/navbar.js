import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../App.css';
const NavBar = (props) => {

  return (
    <div className="App">
      <Navbar collapseOnSelect>
          <Navbar.Header>

          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className="centered">
              <NavItem  className="spreadNavItem bottomLine" eventKey={1} href="#">
                Select App
              </NavItem>
              <NavItem className="spreadNavItem" eventKey={2} href="#">
                Compare
              </NavItem>
              <NavItem className="spreadNavItem bottomLine" eventKey={3} href="#">
                This Week
              </NavItem>
              <NavItem className="spreadNavItem" eventKey={4} href="#">
                Against
              </NavItem>
              <NavItem className="spreadNavItem bottomLine" eventKey={5} href="#">
                Last Week
              </NavItem>
              <NavItem className="spreadNavItem" eventKey={6} href="#">
                Within
              </NavItem>
              <NavItem className="spreadNavItem bottomLine" eventKey={7} href="#">
                Filter
              </NavItem>
              <NavItem className="spreadNavItem" eventKey={8} href="#">
                RESET
              </NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>

  )
};

export default NavBar;
