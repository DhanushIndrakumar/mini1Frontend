import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddUser.css';

export default function AddUser() {
  const [user, setUser] = useState({
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8082/api/user/register', user)
      .then(response => {
        console.log('User submitted:', response.data);
        navigate('/user');
      })
      .catch(error => {
        console.error('Error registering user:', error);
      });
  };

  return (
    <div className="add-user-container">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit} className="add-user-form">
        <div className="form-group">
          <label htmlFor="userFirstName">First Name</label>
          <input
            type="text"
            id="userFirstName"
            value={user.userFirstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userLastName">Last Name</label>
          <input
            type="text"
            id="userLastName"
            value={user.userLastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userEmail">Email</label>
          <input
            type="email"
            id="userEmail"
            value={user.userEmail}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            value={user.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}
