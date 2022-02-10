import { useState } from 'react';
import axios from 'axios';
import Alert from '../alert/Alert';

function FormLogin() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [formError, setFormError] = useState(null);

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setForm(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const res = axios
      .post(`https://reqres.in/api/login`, form)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        setFormError(err.response.data.error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="email">Email</label>
      <input
        className="form-input"
        type="email"
        placeholder="Email"
        name="email"
        value={form.email || ''}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        className="form-input"
        type="password"
        placeholder="Password"
        name="password"
        value={form.password || ''}
        onChange={handleChange}
      />
      {formError ? <Alert children={formError} /> : ''}
      <button type="submit" className="form-btn">
        Send
      </button>
    </form>
  );
}

export default FormLogin;
