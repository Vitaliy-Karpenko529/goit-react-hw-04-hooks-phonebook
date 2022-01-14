import PropTypes from 'prop-types';
import s from './ContactsForm.module.css';
import { useState } from 'react';

function ContactsForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          placeholder="Don Omar"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          type="text"
          name="name"
          required
          onChange={handleChange}
        />
      </label>

      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          placeholder="555-55-55"
          name="number"
          required
          onChange={handleChange}
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactsForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactsForm;
