import React from 'react';
import axios from 'axios';
import Authform from './Authform';

const Signup = () => {
  const handleSignup = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData);
      alert('Signup successful!');
      console.log(response.data);
    } catch (error) {
      console.error('Signup error:', error.response.data);
      alert(error.response.data.message);
    }
  };

  return <Authform onSubmit={handleSignup} title="Signup" buttonText="Register" />;
};

export default Signup;
