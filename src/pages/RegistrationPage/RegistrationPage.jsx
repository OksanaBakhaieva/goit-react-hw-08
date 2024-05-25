import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './Registration.module.css';

export default function RegistrationPage () {
  return (
    <>
        <title className={css.title}>Registration</title>
        <RegistrationForm />
    </>
  );
};
