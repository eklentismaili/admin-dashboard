import { useState } from 'react';

function FormLogin() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setForm(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="email">Email</label>
      <input
        className="form-input"
        type="email"
        placeholder="Email"
        name="email"
        required
        value={form.email || ''}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        className="form-input"
        type="password"
        placeholder="Password"
        name="password"
        required
        value={form.password || ''}
        onChange={handleChange}
      />
      <button type="submit" className="form-btn">
        Send
      </button>
    </form>
  );
}

export default FormLogin;
