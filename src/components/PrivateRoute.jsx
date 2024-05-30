/**
 * - Якщо користувач увійшов у систему, відобразити компонент
 * - В іншому випадку відобразити <Navigate> для перенаправлення
 */


import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export { PrivateRoute };