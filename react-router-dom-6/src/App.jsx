import { Posts, SinglePost, Error, AddNewPost, SlowPosts } from './pages'
import { loader as postsLoader } from './pages/Posts'
import { loader as singlePostLoader } from './pages/SinglePost'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.jsx'
import { action as newPostAction } from './pages/AddNewPost'
import { loader as SlowLoader } from './pages/SlowPosts'
import { action as newLetterAction } from './pages/NewsLetter'

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
        path: 'post/:id',
        element: <SinglePost />,
        loader: singlePostLoader
      },
      {
        path: 'add-post',
        element: <AddNewPost />,
        action: newPostAction
      },
      {
        path: 'slow-posts',
        element: <SlowPosts />,
        loader: SlowLoader,
      },
      {
        path: '/newsletter',
        action: newLetterAction

      }
    ]
  }
]);



export default function App() {
  return <RouterProvider router={router} />
}

