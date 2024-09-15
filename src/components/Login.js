import React, { useState } from 'react';

function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // dummy login logic
    if (userId === 'dummyUser' && password === 'dummyPassword') {
      // redirect to homepage
      window.location.href = '/home';
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>UserId:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;