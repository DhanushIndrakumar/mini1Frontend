import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './AddUser.css'; // Reusing the same CSS as AddUser

export default function ViewUser() {
  const { userId } = useParams();
  const [user, setUser] = useState({
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    phone: ''
  });

  useEffect(() => {
    // Fetch user details by userId to display the details
    axios.get(`http://localhost:8082/api/user/getUser/${userId}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => console.error('Error fetching user details:', error));
  }, [userId]);

  return (
    <div className="add-user-container">
      <h1>View User Details</h1>
      <form className="add-user-form">
        <div className="form-group">
          <label htmlFor="userFirstName">First Name</label>
          <input
            type="text"
            id="userFirstName"
            value={user.userFirstName}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="userLastName">Last Name</label>
          <input
            type="text"
            id="userLastName"
            value={user.userLastName}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="userEmail">Email</label>
          <input
            type="email"
            id="userEmail"
            value={user.userEmail}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            value={user.phone}
            readOnly
          />
        </div>
      </form>
      <Link to="/user" className="back-link">
        Click here to go back
      </Link>
    </div>
  );
}

