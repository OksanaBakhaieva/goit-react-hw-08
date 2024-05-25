import css from './ContactsPage.module.css';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';

export default function ContactsPage () {
  return (
    <div className={css.container}>
      <title className={css.title}>Your phonebook</title>
      <div className={css.infoCont}>
        <div className={css.functionalCont}>
          <ContactForm />
          <SearchBox />
        </div>
        <ContactList />
      </div>
    </div>
  );
};
