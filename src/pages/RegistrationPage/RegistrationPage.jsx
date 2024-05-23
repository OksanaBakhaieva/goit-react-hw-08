import RegisterForm from '../../components/RegistrationForm/RegistrationForm';
import css from './Registration.module.css';

export function RegistrationPage () {
  return (
    <>
        <title className={css.title}>Registration</title>
        <RegisterForm />
    </>
  );
};
