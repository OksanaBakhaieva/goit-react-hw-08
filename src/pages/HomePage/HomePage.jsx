import { FaPhone } from 'react-icons/fa6';
import { FaAddressBook } from 'react-icons/fa';
import css from './HomePage.module.css';
const HomePage = () => {
  return (
    <div className={css.homePage}>
      <p>
        Welcome to your <FaPhone size={24} color="#ef5c0d"/>{' '}
        <FaAddressBook size={24} color="#ef5c0d"/>   <span className={css.span}> phonebook!</span> <br />
        May every call be pleasant!
      </p>
    </div>
  );
};

export default HomePage;