import React from 'react';

const Authform = ({ onSubmit, title, buttonText }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {title === 'Signup' && (
        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} required />
        </div>
      )}
      <div>
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} required />
      </div>
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default Authform;
