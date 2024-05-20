import { Navigate } from 'react-router-dom';
import { selectUserIsSignedIn } from './redux/auth/selectors';
import { useSelector } from 'react-redux';

export default function RestrictedRoute ({ component: Component, redirectTo = '/' }) {
  const isLoggedIn = useSelector(selectUserIsSignedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
