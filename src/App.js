import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import 'modern-normalize/modern-normalize.css';
import Container from './components/Container/Container';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import { useLocaleStorage } from '../src/hooks/useLocaleStorage';

const Title = ['Title'];

export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocaleStorage('contacts', []);

  const addContact = ({ name, number }) => {
    const nweContact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${nweContact.name} you heve this contact`);
      return;
    }
    setContacts([nweContact, ...contacts]);
  };

  const handleChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId),
    );
  };

  return (
    <Container>
      <h1 className={Title}>Phonebook</h1>
      <ContactsForm onSubmit={addContact} />
      <h2 className={Title}>Contacts</h2>
      <Filter value={filter} onChange={handleChangeFilter} />
      <ContactsList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
}
