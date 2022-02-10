import FormLogin from '../components/formLogin/FormLogin';

function Login() {
  return (
    <div className="login-wrapper page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center mb-5">
              Please Login to be redirected to the homepage
            </h3>
            <p className="text-center mb-5">
              Put 'eve.holt@reqres.in' as the email, and whatever as a password.
            </p>
            <FormLogin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
