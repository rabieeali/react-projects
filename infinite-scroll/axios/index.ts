import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getPostsPage = async (
  pageParam = 1,
  options: AxiosRequestConfig = {}
): Promise<any> => {
  const response: AxiosResponse = await api.get(
    `/posts?_page=${pageParam}`,
    options
  );
  return response.data;
};
