import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/Authorization';
import logoOnly from '../assets/logoOnly.png';
import './cstyles/NavBarComponent.scss';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar id="Navbar" light expand="md">
        <NavbarBrand>
           <Link className="nav-link" to="/"><img id="homeNavLogo" src={logoOnly}></img></Link>
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
        {
            user !== null
            && <NavItem id="authButtons">
              {
                user
                  ? <Button id="signIn" onClick={signOutUser}> Sign Out </Button>
                  : <Button id="signOut" onClick={signInUser}> Sign In </Button>
              }
            </NavItem>
          }
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
