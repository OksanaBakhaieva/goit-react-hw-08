import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import Loader from '../Loader/Loader';
import { refreshUser } from "../../redux/auth/operations";
import RestrictedRoute from "../../PrivateRoute";
import PrivateRoute from "../../PrivateRoute";
import { useAuth } from '../../hooks';
import css from './App.module.css';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

Modal.setAppElement('#root');

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
    
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegistrationPage/>} />}
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage/>} />}
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage/>} />}
        />
        <Route
          path="*" element={<NotFoundPage/>} />
      </Route>
    </Routes>
        
  );
};
  