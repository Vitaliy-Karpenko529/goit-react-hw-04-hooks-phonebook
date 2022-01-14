import { useState } from 'react';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactsList/ContactsList';
import ContactsForm from './components/ContactsForm/ContactsForm';
import 'modern-normalize/modern-normalize.css';
import { nanoid } from 'nanoid';
import useLocaleStorage from './hooks/useLocaleStorage';

function App() {
  const [contacts, setContacts] = useLocaleStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.find(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase(),
    )
      ? alert(`${newContact.name} you heve this contact`)
      : setContacts(prevContact => [newContact, ...prevContact]);
  };

  const deleteContact = contactId => {
    setContacts(previousState =>
      previousState.filter(contact => contact.id !== contactId),
    );
  };

  const handleChangeFilter = e => setFilter(e.target.value);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleChangeFilter} />
      <ContactsList
        contacts={getFilteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
