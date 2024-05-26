import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import { Toaster } from "react-hot-toast";
import { IoPersonAddSharp } from 'react-icons/io5';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('User name is required!')
    .min(2, 'User name must be at least 2 characters!')
    .max(50, 'User name must be less than 50 characters!'),
  email: Yup.string()
    .required('Email is required!')
    .email('Must be a valid email!'),
  password: Yup.string()
    .required('Password is required!')
    .min(8, 'Password must be at least 8 characters!'),
  });
  
  const onRegister = formData => {
    dispatch(register(formData));
  };

  const handleSubmit = (data, formActions) => {
    onRegister(data);
    formActions.resetForm();
  };
  return (
    <>
      <Toaster />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
            <h2 className={css.formTitle}>Register</h2>
            <label className={css.label}>
              <span className={css.labelText}>User name:</span>
              <Field
                className={css.formInput}
                placeholder="Enter your name"
                type="text"
                name="name"
              />
              <ErrorMessage
                className={css.errorMsg}
                name="name"
                component="span"
              />
            </label>
            <label className={css.label}>
              <span className={css.labelText}>Email:</span>
              <Field
                className={css.formInput}
                placeholder="Enter your email"
                type="text"
                name="email"
              />
              <ErrorMessage
                className={css.errorMsg}
                name="email"
                component="span"
              />
            </label>
            <label className={css.label}>
              <span className={css.labelText}>Password:</span>
              <Field
                className={css.formInput}
                placeholder="Enter your password"
                type="password"
                name="password"
              />
              <ErrorMessage
                className={css.errorMsg}
                name="password"
                component="span"
              />
            </label>

            <button
              className={css.submitBtn}
              type="submit"
              title="Click to register user"
              aria-label="Register button"
            >
              Register <IoPersonAddSharp size={18} color="#261605" />
            </button>
          </Form>
      </Formik>
      </>
      );
      
};

export default RegistrationForm;