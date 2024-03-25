"use client"
import React, { useState, useEffect } from 'react';
import { getAllUsers, getUserById } from '../services/CustomerService'; 

const UsersComponent: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAllUsers = async () => {
      setIsLoading(true);
      try {
        const allUsers = await getAllUsers();
		  console.log(allUsers);
        setUsers(allUsers);
      } catch (error) {
        console.error('Error fetching all users:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllUsers();
  }, []); 

  const handleUserClick = async (userId: number) => {
    setIsLoading(true);
    try {
      const user = await getUserById(userId);
      setSelectedUser(user);
    } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div>
        <h1>All Users</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id} onClick={() => handleUserClick(user.id)}>
                {user.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2>Selected User</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : selectedUser ? (
          <div>
            <p>Name: {selectedUser.name}</p>
            <p>Email: {selectedUser.email}</p>
          </div>
        ) : (
          <p>No user selected</p>
        )}
      </div>
    </div>
  );
};

export default UsersComponent;
