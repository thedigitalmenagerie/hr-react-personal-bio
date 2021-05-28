import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { animations } from 'react-animation';
import { AnimationWrapper } from 'react-hover-animation';
import { getContacts } from '../helpers/data/ContactData';
import ContactForm from '../forms/ContactForm';
import ContactCards from '../components/ContactCardComponent';
import GitHub from '../assets/gitHub.png';
import LinkedIn from '../assets/linkedin.png';
import Twitter from '../assets/twitter.png';
import './vStyles/ContactView.scss';

export default function ContactView({ admin }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((response) => setContacts(response));
  }, []);

  return (
    <div className="contactContainer" style={{ animation: animations.fadeIn }}>
       <div className="innerContainer">
                <ContactForm
                  contactFormTitle="Contact Honey-Rae"
                  contacts={contacts}
                  setContacts={setContacts}
                />
                <div id="phone">Phone: (615)-956-1551</div>
                <div id="email">Email: honeyraeswan@gmail.com</div>
                <div id="link">
                  <AnimationWrapper><img className="cLink" src={GitHub}></img></AnimationWrapper>
                  <AnimationWrapper><img className="cLink" src={LinkedIn}></img></AnimationWrapper>
                  <AnimationWrapper><img className="cLink" src={Twitter}></img></AnimationWrapper>
                </div>
        </div>
        {
          admin !== null
          && <ContactCards
        admin={admin}
        contacts={contacts}
        setContacts={setContacts}
        />
        }

    </div>
  );
}

ContactView.propTypes = {
  admin: PropTypes.any,
};
