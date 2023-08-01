import React, { Component } from 'react';
import CreateContactForm from './CreateContactForm/CreateContactForm';
import ContactsList from './ContactsList/ContactsList';
import Section from './Section/Section';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <CreateContactForm onCreateContact={this.addContact} />

        <Section title="Contacts">
          <ContactsList contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}
