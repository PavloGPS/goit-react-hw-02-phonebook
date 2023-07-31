import React, { Component } from 'react';
import CreateContactForm from './CreateContactForm/CreateContactForm';
import ContactsList from './ContactsList/ContactsList';
import Section from './Section/Section';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  addContact(newContact) {
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  }
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
