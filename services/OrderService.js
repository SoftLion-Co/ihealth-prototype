import axios from 'axios';
import { BASE_URL} from './CustomerService';

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${BASE_URL}order`, orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const getAllOrders = async () => {
  try {
    const response = await axios.get(`${BASE_URL}order`);
    return response.data;
  } catch (error) {
    console.error('Error getting all orders:', error);
    throw error;
  }
};

export const getOrderById = async (orderId) => {
  try {
    const response = await axios.get(`${BASE_URL}order/${orderId}`);
    return response.data;
  } catch (error) {
    console.error(`Error getting order with ID ${orderId}:`, error);
    throw error;
  }
};

export const updateOrder = async (orderId, updatedOrderData) => {
  try {
    const response = await axios.put(`${BASE_URL}order/${orderId}`, updatedOrderData);
    return response.data;
  } catch (error) {
    console.error(`Error updating order with ID ${orderId}:`, error);
    throw error;
  }
};

export const deleteOrder = async (orderId) => {
  try {
    const response = await axios.delete(`${BASE_URL}order/${orderId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting order with ID ${orderId}:`, error);
    throw error;
  }
};
