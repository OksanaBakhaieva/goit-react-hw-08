import css from './Contacts.module.css';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import PageTitle from '../../components/PageTitle/PageTitle';

export function ContactsPage () {
  return (
    <div className={css.container}>
      <PageTitle>Your phonebook</PageTitle>
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
