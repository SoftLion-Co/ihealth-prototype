import axios from 'axios';
export const BASE_URL = 'http://localhost:3001/';

export const getBlogs = async (): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/blog`);
    return response.data;
  } catch (error) {
    console.error('Error getting blogs:', error);
    throw error;
  }
};

export const getBlogById = async (blogId: string): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/blog/${blogId}`);
    return response.data;
  } catch (error) {
    console.error(`Error getting blog with ID ${blogId}:`, error);
    throw error;
  }
};