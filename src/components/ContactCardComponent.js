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
  firebaseKey,
  contactName,
  contactEmail,
  contactPhone,
  contactDate,
  contactReason,
  setContacts
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
    <Card>
      <CardBody>
        <CardTitle tag="h5">{contactName}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{contactEmail}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{contactPhone}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{contactDate}</CardSubtitle>
        <CardText>{contactReason}</CardText>
        <Button onClick={() => handleClick('delete')}>Delete</Button>
        <Button onClick={() => handleClick('edit')}>
          {editingContacts ? 'Close Form' : 'Edit Contacts'}
        </Button>
          {editingContacts && <ContactForm
          contactFormTitle='Edit Contact'
          firebaseKey={firebaseKey}
          setContacts={setContacts}
          contactName={contactName}
          contactEmail={contactEmail}
          contactPhone={contactPhone}
          contactDate={contactDate}
          contactReason={contactReason}
          />}
      </CardBody>
    </Card>
  );
};

ContactCards.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactEmail: PropTypes.string.isRequired,
  contactPhone: PropTypes.string.isRequired,
  contactDate: PropTypes.string.isRequired,
  contactReason: PropTypes.string.isRequired,
  setContacts: PropTypes.func
};

export default ContactCards;
