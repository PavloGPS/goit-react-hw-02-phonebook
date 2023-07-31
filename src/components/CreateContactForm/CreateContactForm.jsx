import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import css from './CreateContactForm.module.css';

class CreateContactForm extends Component {
  state = {
    name: '',
  };

  // static propTypes = {
  //   onCreateContact: PropTypes.func.isRequired,
  // };

  handleOnChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
    console.log(this.state.name);
  };

  handleCreateContact = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name.trim(),
    };
    this.props.onCreateContact(newContact);
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;
    return (
      <form
        className={css.createContactForm}
        onSubmit={this.handleCreateContact}
      >
        <label className={css.labelForm}>
          Name
          <input
            className={css.inputFieldForm}
            type="text"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleOnChange}
          />
        </label>

        <button className={css.submitBtnForm} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default CreateContactForm;
