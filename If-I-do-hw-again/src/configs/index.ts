import axios from 'axios';

axios.defaults.baseURL = 'https://restcountries.com/v3';

const fetcher = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

export const SWROption = { fetcher };
