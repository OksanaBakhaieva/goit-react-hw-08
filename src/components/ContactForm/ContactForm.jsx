import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsOps';
import { nanoid } from '@reduxjs/toolkit';


const ContactsBoxSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
  number: Yup.string()
   .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
  });

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm () {
  const dispatch = useDispatch();
  const onAddContacts = contactData => {
    const contactFinalData = {
      ...contactData,
      id: nanoid(),
    };
    dispatch(addContact(contactFinalData));
  };
  const handleSubmit = (values, actions) => {
    onAddContacts(values);
    actions.resetForm();
  };
  return (
    <Formik
      validationSchema={ContactsBoxSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span className={css.text}>Name</span>
          <Field
            className={css.field}
            type="text"
            name="name"
          />
          <ErrorMessage
            className={css.error}
            name="name"
            component="span"
          />
        </label>

        <label className={css.label}>
          <span className={css.text}>Number</span>
          <Field
            className={css.field}
            type="text"
            name="number"
          />
          <ErrorMessage
            className={css.error}
            name="number"
            component="span"
          />
        </label>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};