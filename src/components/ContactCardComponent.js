import React, { useState } from 'react';
import {
  Card,
  Button,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteContacts } from '../helpers/data/ContactData';
import ContactForm from '../forms/ContactForm';

const ContactCards = ({
  admin,
  contacts,
  setContacts
}) => {
  const [editingContacts, setEditingContacts] = useState(false);

  const handleClick = (fbKey, type) => {
    switch (type) {
      case 'delete':
        deleteContacts(fbKey)
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
    <div className="cardContainer">
      {contacts.map((contact) => (
        <Card key={contact.firebaseKey}>
          <CardBody>
            <CardTitle tag="h5">{contact.contactName}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{contact.contactEmail}</CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{contact.contactPhone}</CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{contact.contactDate}</CardSubtitle>
            <CardText>{contact.contactReason}</CardText>
              {editingContacts && <ContactForm
              contactFormTitle='Edit Contact'
              contacts={contacts}
              setContacts={setContacts}
            />
            }
            {
              admin !== null
              && <div>
                    <Button onClick={() => handleClick(contact.firebaseKey, 'delete')}>Delete</Button>
                    <Button onClick={() => handleClick(contact.firebaseKey, 'edit')}>
                      {editingContacts ? 'Close Form' : 'Edit Contacts'}
                    </Button>
                  </div>
            }

      </CardBody>
    </Card>
      ))
      }
    </div>
  );
};

ContactCards.propTypes = {
  admin: PropTypes.any,
  contacts: PropTypes.array,
  setContacts: PropTypes.func
};

export default ContactCards;
