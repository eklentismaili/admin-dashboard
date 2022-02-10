import { useNavigate } from 'react-router';
import { useAuth } from '../providers/Auth';

function NoMatch() {
  const navigate = useNavigate();
  const auth = useAuth();

  function goBack() {
    auth.user ? navigate(-1) : navigate('/login');
  }

  return (
    <div className="no-match-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="no-match-header">404</h1>
            <p className="no-match-text">
              Sorry the page you requested was not found.
            </p>
            <button onClick={() => goBack()} className="no-match-button">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;
