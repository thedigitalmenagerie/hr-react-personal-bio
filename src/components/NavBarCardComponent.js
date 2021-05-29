import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { signOutUser } from '../helpers/Authorization';
import logoOnly from '../assets/logoOnly.png';
import './cstyles/NavBarComponent.scss';

const NavBar = ({ user, admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticatedUser = () => (
      <NavItem>
        <Link className="nav-link" to="/reviews">Reviews</Link>
      </NavItem>
  );

  const authenticatedUser2 = () => (
      <NavItem>
        <Link className="nav-link" to="/contact">Contact</Link>
      </NavItem>
  );

  return (
    <div>
      <Navbar id="Navbar" light expand="md" >
        <NavbarBrand>
           <Link className="nav-link" to="/"><img id="homeNavLogo" src={logoOnly}></img></Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
           <Link className="nav-link" to="/biography">- Biography -</Link>
          </NavItem>
          { (user || admin) && authenticatedUser2()}
          <NavItem>
            <Link className="nav-link" to="/projects">- Projects -</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/resume">- Resume -</Link>
          </NavItem>
          { (user || admin) && authenticatedUser()}
          <NavItem>
            <Link className="nav-link" to="/technologies">- Technologies -</Link>
         </NavItem>
        </Nav>
        </Collapse>
        {
            (user || admin) !== null
            && <NavItem id="authButtons">
              {
                (user || admin)
                  ? <button id="signOut" onClick={signOutUser}> Sign Out </button>
                  : <div></div>
              }
            </NavItem>
          }
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any,
  user: PropTypes.any,
};

export default NavBar;
