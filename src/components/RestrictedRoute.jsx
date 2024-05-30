/**
 * - Якщо користувач увійшов у систему, відобразити <Navigate> для перенаправлення
 * - В іншому випадку відобразити компонент
 */


import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export { RestrictedRoute };