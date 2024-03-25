import axios from 'axios';
export const BASE_URL = 'http://localhost:3001/';

export const getAllUsers = async (): Promise<any> => {
	try {
	  const response = await axios.get(`${BASE_URL}customer`);
	  return response.data;
	} catch (error) {
	  console.error('Error getting all users:', error);
	  throw error;
	}
 };
 
 export const getUserById = async (userId: string): Promise<any> => {
	try {
	  const response = await axios.get(`${BASE_URL}customer/${userId}`);
	  return response.data;
	} catch (error) {
	  console.error(`Error getting user with ID ${userId}:`, error);
	  throw error;
	}
 };

