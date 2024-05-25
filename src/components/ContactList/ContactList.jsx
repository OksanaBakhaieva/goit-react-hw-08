import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FcContacts } from 'react-icons/fc';

import css from './ContactList.module.css';

import {
  selectFilteredContacts,
  selectContactsError,
  selectContactsLoading,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import Contact from '../Contact/Contact';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

const ContactList = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectContactsError);
  const isLoading = useSelector(selectContactsLoading);
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {contacts === null || contacts.length === 0 ? (
        <p className={css.noContactsMess}>
          There is no list.
          <FcContacts size={24} /> Add more contacts.
        </p>
      ) : (
        <ul className={css.contactList}>
          {contacts.map(contact => {
            return (
              <li className={css.contactItem} key={contact.id}>
                <Contact {...contact} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ContactList;