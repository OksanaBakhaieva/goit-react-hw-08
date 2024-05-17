import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { fetchContacts } from '../../redux/contactsOps';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <div className={css.formContainer}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
       </div>
      <ContactList contacts={contacts}/>
    </div>
  ); 
}