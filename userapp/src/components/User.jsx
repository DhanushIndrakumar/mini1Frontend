import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './User.css';

export default function User() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8082/api/user/getAllUsers')
      .then(response => {
        setUsers(response.data);
        localStorage.setItem('userList', JSON.stringify(response.data));
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleDelete = (userId) => {
    axios.delete(`http://localhost:8082/api/user/deleteUserById/${userId}`)
      .then(response => {
        console.log('User deleted:', response.data);
        setUsers(users.filter(user => user.userId !== userId));
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  const handleUpdate = (userId) => {
    navigate(`/updateUser/${userId}`);
  };

  const handleView = (userId) => {
    navigate(`/viewUser/${userId}`);
  };

  return (
    <div className="user-container">
      <h1>User Management System</h1>
      <br />
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.userFirstName}</td>
              <td>{user.userLastName}</td>
              <td>{user.userEmail}</td>
              <td>
                <button className="action-button delete" onClick={() => handleDelete(user.userId)}>Delete</button>
                <button className="action-button update" onClick={() => handleUpdate(user.userId)}>Update</button>
                <button className="action-button view" onClick={() => handleView(user.userId)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
