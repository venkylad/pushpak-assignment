import React, { useEffect, useState } from 'react';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import axios from 'axios';

const App = () => {
  const [login, setLogin] = useState(false);

  const handleSubmit = async (e, user) => {
    e.preventDefault();
    await axios
      .post('http://13.76.214.165:8001/api/login', user)
      .then(({ data }) => {
        localStorage.setItem('token', data?.token);
        localStorage.setItem('user', user?.username);
        alert(data?.message);
        setLogin(true);
      })
      .catch((err) => {
        alert('Please Check Email and Password');
        setLogin(false);
      });
  };

  useEffect(() => {
    if (window.localStorage.getItem('token') !== null) {
      setLogin(true);
    }
  }, []);
  return (
    <div className='max-w-7xl mx-auto'>
      {login ? <Dashboard /> : <Login handleSubmit={handleSubmit} />}
    </div>
  );
};

export default App;
