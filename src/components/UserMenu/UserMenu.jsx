import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

  return (
    <div className={css.userMenu}>
      <p className={css.welcome}>Welcome, {user.name}!</p>
      <button
        className={css.logOutBtn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;