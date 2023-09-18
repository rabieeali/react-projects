import { Posts, SinglePost, Error, AddNewPost } from './pages'
import { loader as postsLoader } from './pages/Posts'
import { loader as singlePostLoader } from './pages/SinglePost'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Posts />,
        loader: postsLoader
      },
      {
        path:'post/:id',
        element: <SinglePost />,
        loader: singlePostLoader
      },
      {
        path:'add-post',
        element: <AddNewPost />
      }
    ]
  }
]);



export default function App() {
  return <RouterProvider router={router} />
}

