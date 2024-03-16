import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class DataStore {
  data = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchData = async () => {
    this.isLoading = true;
    try {
      const response = await axios.get('https://example.com/api/data');
      this.data = response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.isLoading = false;
    }
  };
}

const dataStore = new DataStore();
export default dataStore;