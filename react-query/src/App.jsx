import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

import Post from './components/Post'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Post />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
