import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimationWrapper } from 'react-hover-animation';
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
        <AnimationWrapper><Link className="nav-link" to="/reviews">Reviews</Link></AnimationWrapper>
      </NavItem>
  );

  const authenticatedUser2 = () => (
      <NavItem>
        <AnimationWrapper><Link className="nav-link" to="/contact">Contact</Link></AnimationWrapper>
      </NavItem>
  );

  const authenticatedAdmin = () => (
    <NavItem>
      <AnimationWrapper><Link className="nav-link" to="/reviews">Reviews</Link></AnimationWrapper>
    </NavItem>
  );

  const authenticatedAdmin2 = () => (
    <NavItem>
      <AnimationWrapper><Link className="nav-link" to="/contact">Contact</Link></AnimationWrapper>
    </NavItem>
  );

  return (
    <div>
      <Navbar id="Navbar" light expand="md" >
        <NavbarBrand>
           <AnimationWrapper><Link className="nav-link" to="/"><img id="homeNavLogo" src={logoOnly}></img></Link></AnimationWrapper>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <AnimationWrapper><Link className="nav-link" to="/biography">- Biography -</Link></AnimationWrapper>
          </NavItem>
          { user && authenticatedUser2()}
          { admin && authenticatedAdmin2()}
          <NavItem>
            <AnimationWrapper><Link className="nav-link" to="/projects">- Projects -</Link></AnimationWrapper>
          </NavItem>
          <NavItem>
            <AnimationWrapper><Link className="nav-link" to="/resume">- Resume -</Link></AnimationWrapper>
          </NavItem>
          { user && authenticatedUser()}
          { admin && authenticatedAdmin()}
          <NavItem>
            <AnimationWrapper><Link className="nav-link" to="/technologies">- Technologies -</Link></AnimationWrapper>
         </NavItem>
        </Nav>
        </Collapse>
        {
            (user || admin) !== null
            && <NavItem id="authButtons">
              {
                (user || admin)
                  ? <AnimationWrapper><button id="signOut" onClick={signOutUser}> Sign Out </button></AnimationWrapper>
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
