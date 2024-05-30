import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { Toaster } from "react-hot-toast";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required!')
    .email('Must be a valid email!'),
  password: Yup.string()
    .required('Password is required!')
    .min(8, 'Password must be at least 8 characters!'),
});

  const onRegister = formData => {
    dispatch(logIn(formData));
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
            <h2 className={css.formTitle}>Log in</h2>
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
              Log in 
            </button>
          </Form>
      </Formik>
    </>
  );
};

export default LoginForm;