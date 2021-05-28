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

export default function ContactView({
  admin,
  setAdmin,
  user,
  setUser,
}) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((response) => setContacts(response));
  }, []);

  return (
    <div className="contactContainer" style={{ animation: animations.fadeIn }}>
       <div className="innerContainer">
       {
          user !== null
          && <div>
            { user
              ? <div><ContactForm
              contactFormTitle="Contact Honey-Rae"
              contacts={contacts}
              setContacts={setContacts}
              user={user}
              setUser={setUser}
              admin={admin}
              setAdmin={setAdmin}
            />
            <div id="phone">Phone: (615)-956-1551</div>
            <div id="email">Email: honeyraeswan@gmail.com</div>
            <div id="link">
              <AnimationWrapper><img className="cLink" src={GitHub}></img></AnimationWrapper>
              <AnimationWrapper><img className="cLink" src={LinkedIn}></img></AnimationWrapper>
              <AnimationWrapper><img className="cLink" src={Twitter}></img></AnimationWrapper>
            </div>
          </div>
              : <div></div>

            }
            </div>
        }
        {
          admin !== null
          && <div>
            { admin
              ? <ContactCards
                  contacts={contacts}
                  setContacts={setContacts}
                  user={user}
                  setUser={setUser}
                  admin={admin}
                  setAdmin={setAdmin}
                />
              : <div></div>

            }
            </div>
        }
    </div>
    </div>
  );
}

ContactView.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.any,
  admin: PropTypes.any,
  setAdmin: PropTypes.any,
};
