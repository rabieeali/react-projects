import { useQuery, useQueryClient } from 'react-query';
import type { Treatment } from '../../../../../shared/types';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';


// for when we need a query function for useQuery
async function getTreatments(): Promise<Treatment[]> {
  const { data } = await axiosInstance.get('/treatments');
  return data;
}

export function useTreatments(): Treatment[] {
  const fallback = []; // loading indicator fallback we also added a useIfetching hook in Loading component to centeralize
  const { data = fallback } = useQuery(queryKeys.treatments, getTreatments);
  return data;
}

export function usePrefetchTreatment(): void {
  const queryClient = useQueryClient()
  queryClient.prefetchQuery(queryKeys.treatments) // key is very important!
}