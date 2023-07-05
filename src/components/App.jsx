import React, { Component } from 'react';
import Section from './Section/Section';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>

        <Section title="Contacts"></Section>
      </>
    );
  }
}
