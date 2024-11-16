import React from 'react';
import axios from 'axios';
import Authform from './Authform';

const Login = () => {
  const handleLogin = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      alert('Login successful!');
      console.log(response.data);
    } catch (error) {
      console.error('Login error:', error.response.data);
      alert(error.response.data.message);
    }
  };

  return <Authform onSubmit={handleLogin} title="Login" buttonText="Login" />;
};

export default Login;
