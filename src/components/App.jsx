import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import './ContactForm/ContactForm.css';
import './ContactList/ContactList.css';
import './Filter/Filter.css';

const App = () => {

  return (
    <div className="contact-menu">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;

