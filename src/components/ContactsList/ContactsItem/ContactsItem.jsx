import React from 'react';
// import PropTypes from 'prop-types';
import css from './ContactsItem.module.css';

const ContactsItem = ({ contact }) => {
  const { name, number } = contact;
  return (
    <li className={css.ContactsItem}>
      <p>
        {name}: {number}
      </p>
    </li>
  );
};

// ContactsItem.propTypes = {
//   contact: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default ContactsItem;
