import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { apiLogoutUser } from '../../redux/auth/operations';
import { useAuth } from '../../services/useAuth';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

  return (
    <div className={css.userMenu}>
      <p className={css.welcome}>Welcome, {user.name}!</p>
      <button
        className={css.logOutBtn}
        type="button"
        onClick={() => dispatch(apiLogoutUser())}
      >
        Logout
      </button>
    </div>
  );
};