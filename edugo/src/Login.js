import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement your login logic here, e.g., using an API call or context
    console.log('Username:', username, 'Password:', password);

    // For example, you might send a login request to your backend
    // fetch('/api/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ username, password }),
    // })
    // .then(response => {
    //   // Handle successful login
    // })
    // .catch(error => {
    //   // Handle login errors
    // });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;