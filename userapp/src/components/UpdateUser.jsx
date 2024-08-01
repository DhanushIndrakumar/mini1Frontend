import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './AddUser.css'; // Reusing the same CSS as AddUser

export default function UpdateUser() {
  const { userId } = useParams();
  const [user, setUser] = useState({
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    phone: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details by userId to pre-fill the form
    axios.get(`http://localhost:8082/api/user/getUser/${userId}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => console.error('Error fetching user details:', error));
  }, [userId]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8082/api/user/updateUserById/${userId}`, user)
      .then(response => {
        console.log('User updated:', response.data);
        navigate('/user');
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  };

  return (
    <div className="add-user-container">
      <h1>Update User Details</h1>
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
        <button type="submit" className="submit-button">Update</button>
      </form>
    </div>
  );
}
