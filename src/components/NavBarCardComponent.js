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
           <Link className="nav-link" to="/">Home</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
          <Link></Link>
          </NavItem>
          <NavItem>
            <Link></Link>
         </NavItem>
         <NavItem>
         <Link></Link>
         </NavItem>
        </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
