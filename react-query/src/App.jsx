
import { Routes, Route } from 'react-router-dom'
import Post from './pages/Post'
import Products from './pages/Products'




export default function App() {
  return (
   <>
    <Routes>
      <Route index element={<Post />} />
      <Route path='products' element={<Products />} />
    </Routes>
   </>
  )
}
