import axios from 'axios';
import { BASE_URL} from './CustomerService';

export const getAllProducts = async (): Promise<any> => {
	try {
	  const response = await axios.get(`${BASE_URL}product`);
	  return response.data;
	} catch (error) {
	  console.error('Error getting all products:', error);
	  throw error;
	}
 };
 
 export const getProductById = async (productId: string): Promise<any> => {
	try {
	  const response = await axios.get(`${BASE_URL}product/${productId}/metafields`);
	  return response.data;
	} catch (error) {
	  console.error(`Error getting product with ID ${productId}:`, error);
	  throw error;
	}
 };