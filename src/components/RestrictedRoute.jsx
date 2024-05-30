/**
 * - Якщо користувач увійшов у систему, відобразити <Navigate> для перенаправлення
 * - В іншому випадку відобразити компонент
 */


import { useAuth } from "../hooks";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({ component, redirectTo }) {
  const isLoggedIn = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}