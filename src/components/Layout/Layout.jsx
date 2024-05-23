import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import css from './Layout.module.css'

export default function Layout () {
  return (
    <>
      <div className={css.container}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: '#f9e3cc',
            color: '#f57a38',
            marginTop: '25px',
          }
        }}
      />
    </div>
    </>
    
  );
};