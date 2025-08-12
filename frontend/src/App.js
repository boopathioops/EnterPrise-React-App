import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faSpinner } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (form.username !== 'admin' || form.password !== 'password') {
        setError('Invalid username or password');
      } else {
        alert('Login successful!');
      }
    }, 1500);
  };

  return (
    <main className="login-bg">
      <section className="login-form-wrapper">
        <form className="login-form" onSubmit={handleSubmit} autoComplete="off" aria-label="Login form">
          <h2 className="login-title">Sign In</h2>
          <div className="input-group">
            <label htmlFor="username" className="visually-hidden">Username</label>
            <span className="input-icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
              autoFocus
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="visually-hidden">Password</label>
            <span className="input-icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <div className="error-message" role="alert">{error}</div>}
          <button className="login-btn" type="submit" disabled={loading} aria-busy={loading}>
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              'Login'
            )}
          </button>
          <div className="login-options">
            <button type="button" className="link-btn">Forgot password?</button>
            <button type="button" className="link-btn">Sign up</button>
          </div>
          <div className="divider"><span>or</span></div>
          <div className="social-login-group">
            <button type="button" className="social-btn google" aria-label="Sign in with Google">
              <i className="fab fa-google"></i>
            </button>
            <button type="button" className="social-btn facebook" aria-label="Sign in with Facebook">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button type="button" className="social-btn github" aria-label="Sign in with GitHub">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default App;
