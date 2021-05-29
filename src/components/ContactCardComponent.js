import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteContacts } from '../helpers/data/ContactData';
import ContactForm from '../forms/ContactForm';
import './cstyles/ContactComponent.scss';

const ContactCards = ({
  firebaseKey,
  contactName,
  contactEmail,
  contactPhone,
  contactDate,
  contactReason,
  setContacts,
  admin,
  setAdmin,
  user,
  setUser,
}) => {
  const [editingContacts, setEditingContacts] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteContacts(firebaseKey)
          .then((contactsArray) => setContacts(contactsArray));
        break;
      case 'edit':
        setEditingContacts((prevState) => !prevState);
        break;
      default:
        console.warn('Nothing selected');
    }
  };

  return (
    <div className="contactContainer">
      <div className="conactCardHolder">
        <Card id="contactCards">
          <CardBody>
            <CardTitle tag="h5">{contactName}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{contactEmail}</CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{contactPhone}</CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{contactDate}</CardSubtitle>
            <CardText>{contactReason}</CardText>
            {
              admin !== null
                && <div id="hiddenAdminContent">
                  { admin
                    ? <div>
                        <div id="adminButtons">
                          <button id="deleteContact"onClick={() => handleClick('delete')}>Delete</button>
                          <button id="editContact" onClick={() => handleClick('edit')}>
                            {editingContacts ? 'Close Form' : 'Edit Contacts'}
                          </button>
                            {editingContacts && <ContactForm
                              contactFormTitle='Edit Contact'
                              firebaseKey={firebaseKey}
                              setContacts={setContacts}
                              contactName={contactName}
                              contactEmail={contactEmail}
                              contactPhone={contactPhone}
                              contactDate={contactDate}
                              contactReason={contactReason}
                              admin={admin}
                              setAdmin={setAdmin}
                              user={user}
                              setUser={setUser}
                            />}
                          </div>
                          </div>
                    : <div></div>
                  } </div>
              } </CardBody>
          </Card>
      </div>
    </div>
  );
};

ContactCards.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactEmail: PropTypes.string.isRequired,
  contactPhone: PropTypes.string.isRequired,
  contactDate: PropTypes.string.isRequired,
  contactReason: PropTypes.string.isRequired,
  setContacts: PropTypes.func,
  user: PropTypes.any,
  setUser: PropTypes.func,
  admin: PropTypes.any,
  setAdmin: PropTypes.func
};

export default ContactCards;
