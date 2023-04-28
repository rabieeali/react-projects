import { useQuery } from '@tanstack/react-query';
import client from './client';

const useRQ = (key: any, initialData: any) => [
  useQuery([key], () => initialData, { enabled: false }).data,
  (value: any) => client.setQueriesData([key], value),
];
export default useRQ