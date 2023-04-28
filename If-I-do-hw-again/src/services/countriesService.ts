import axios from 'axios';
import { ICountry } from '../models';

axios.defaults.baseURL = 'https://restcountries.com/v3';

const getAllCountries = async () => {
  const response = await axios.get<ICountry[]>(`/all`);
  return response?.data;
};

const getCountryByName = async (name: string) => {
  const response = await axios.get<ICountry>(`/name/${name}`);
  return response?.data;
};

export { getAllCountries, getCountryByName };
