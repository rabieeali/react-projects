import axios from 'axios'
import { endpoints } from '@/api/endpoints';

axios.defaults.baseURL = endpoints.base_url

export const getAllCountries = async () => {
    const response = await axios.get(endpoints.get_all_countries_endpoint);
    return response?.data;
} 