import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './login.scss';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const Navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if(response.ok){
        Navigate('/home')
      }
       else if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      console.log('Login successful');
      setUsername('');
      setPassword('');
      setError('');
    } catch (error) {
      setError(error.message || 'Login failed. Please check your credentials.');
    }
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Login</h1>
          <span>Welcome back! Please login to your account.</span>
          <button className="login-btn">Login</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit" className="submit-btn" onClick={ handleLogin}>
              Login
            </button>
            {error && <p className="error">{error}</p>}
          </form>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login; 