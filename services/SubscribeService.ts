
import axios from 'axios';
export const BASE_URL = 'http://localhost:3001/';


export const addNewReceiver = async (category: string, email: string): Promise<string> => {
  try {
    await axios.post(`${BASE_URL}newsletter/receiver`, { category, email });
    return "New receiver added successfully";
  } catch (error) {
    console.error('Error adding new receiver:', error);
    throw error;
  }
};
