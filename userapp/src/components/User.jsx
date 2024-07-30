import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './User.css';

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/api/user/getAllUsers')
      .then(response => {
        setUsers(response.data);
        localStorage.setItem('userList', JSON.stringify(response.data));
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="user-container">
      <h1>User Management System</h1>
      <br></br>
      <Link to="/addUser" className="add-user-button">
        Add User
      </Link>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User First Name</th>
            <th>User Last Name</th>
            <th>Email</th>
            {/* Add other columns as necessary */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.userFirstName}</td>
              <td>{user.userLastName}</td>
              <td>{user.userEmail}</td>
              {/* Add other user data as necessary */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
