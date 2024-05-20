import { FaPhone } from 'react-icons/fa6';
import { FaAddressBook } from 'react-icons/fa';
import css from './HomePage.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';

export function HomePage() {
  return (
    <div className={css.homePage}>
      <PageTitle>Home phonebook</PageTitle>
      <p>
        Welcome to your <FaPhone size={24} color="#ef5c0d" />{' '}
        <FaAddressBook size={24} color="#ef5c0d" /> phonebook! <br />
        May every call be pleasant!
      </p>
    </div>
  );
};