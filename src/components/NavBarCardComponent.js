import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar id="Navbar" light expand="md">
        <NavbarBrand>
           <Link className="nav-link" to="/">Honey-Rae Elizabeth Swan</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="/biography">Biography</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/contact">Contact</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/projects">Projects</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/resume">Resume</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/reviews">Reviews</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/technologies">Technologies</Link>
         </NavItem>
        </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
