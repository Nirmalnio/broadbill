import { useState } from 'react';

function useLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    setUsername(savedUsername);
    setIsLoggedIn(true);
  }

  const login = (username) => {
    setUsername(username);
    localStorage.setItem('username', username);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUsername('');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
  };

  return {
    isLoggedIn,
    username,
    login,
    logout,
  };
}

export default useLogin;
