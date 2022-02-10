import { Navigate } from 'react-router';
import { useAuth } from '../providers/Auth';

function PrivateRoute({ children }) {
  const auth = useAuth();

  return auth.user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
