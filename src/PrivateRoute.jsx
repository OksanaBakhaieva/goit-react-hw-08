import { Navigate } from 'react-router-dom';
import { selectUserIsRefreshing, selectUserIsSignedIn } from './redux/auth/selectors';
import { useSelector } from 'react-redux';

export default function PrivateRoute ({ component: Component, redirectTo = '/' }) {
    const isLoggedIn = useSelector(selectUserIsSignedIn);
    const isRefreshing = useSelector(selectUserIsRefreshing);
    const shouldRedirect = !isLoggedIn && !isRefreshing;
    
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

