import React from 'react';
// import PropTypes from 'prop-types';
import css from './ContactsItem.module.css';

const ContactsItem = ({ contact }) => {
  const { name } = contact;
  return (
    <li className={css.ContactsItem}>
      <p>{name}</p>
    </li>
  );
};

// ContactsItem.propTypes = {
//   contact: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default ContactsItem;
