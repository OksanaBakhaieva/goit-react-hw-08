import { useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import Loader from '../Loader/Loader';
import css from './ContactList.module.css';

export default function ContactList () {
  const contacts = useSelector(selectFilteredContacts);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  return (
         <>
             {isError && <div>Something went wrong! Please reload this page.</div>}
             {isLoading && <Loader />}
             <ul className={css.contactList}>
               {contacts.map(contact => {
                 return (
                   <li className={css.contactItem} key={contact.id}>
                     <Contact {...contact} />
                   </li>
                 );
               })}
             </ul>
           </>
  );
};