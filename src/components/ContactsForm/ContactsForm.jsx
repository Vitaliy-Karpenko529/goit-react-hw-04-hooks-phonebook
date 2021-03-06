// import PropTypes from 'prop-types';
// import s from './ContactsForm.module.css';
// import { useLocaleStorage } from '../../hooks/useLocaleStorage';

// function ContactsForm({ onSubmit }) {
//   const [name, setName] = useLocaleStorage('name', '');
//   const [number, setNumber] = useLocaleStorage('number', '');

//   const handleChange = e => {
//     const { name, value } = e.currentTarget;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     onSubmit({ name, number });
//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form className={s.form} onSubmit={handleSubmit}>
//       <label className={s.label}>
//         Name
//         <input
//           className={s.input}
//           placeholder="Don Omar"
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//       <label className={s.label}>
//         Number
//         <input
//           className={s.input}
//           placeholder="555-55-55"
//           type="tel"
//           name="number"
//           value={number}
//           onChange={handleChange}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </label>
//       <button className={s.button} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// }

// ContactsForm.propTypes = {
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.number.isRequired,
//     }),
//   ),
// };

// export default ContactsForm;

import PropTypes from 'prop-types';
import s from './ContactsForm.module.css';
import { useLocaleStorage } from '../../hooks/useLocaleStorage';

function ContactsForm({ onSubmit }) {
  const [name, setName] = useLocaleStorage('name', '');
  const [number, setNumber] = useLocaleStorage('number', '');

  const hundleChange = e => {
    const { name, value } = e.currentTarget;
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

  const hundleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={hundleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          placeholder="Don Omar"
          type="text"
          name="name"
          value={name}
          onChange={hundleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          placeholder="555-55-55"
          type="tel"
          name="number"
          value={number}
          onChange={hundleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactsForm.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }),
  ),
};

export default ContactsForm;
