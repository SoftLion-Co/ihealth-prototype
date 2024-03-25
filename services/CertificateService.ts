import axios from 'axios';
import { BASE_URL} from './CustomerService';

export const getCertificateById = async (certificateId: string): Promise<any> => {
	try {
	  const response = await axios.get(`${BASE_URL}certificate/${certificateId}`);
	  return response.data;
	} catch (error) {
	  console.error(`Error getting certificate with ID ${certificateId}:`, error);
	  throw error;
	}
 };
