import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export default function LoginPage () {
  return (
    <div>
      <title className={css.title}>Please log in</title>
      <LoginForm />
    </div>
  );
};
