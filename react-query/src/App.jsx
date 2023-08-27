
import { Routes, Route } from 'react-router-dom'
import Post from './pages/Post'
import Products from './pages/Products'
import StarWars from './pages/StarWars'
import Gallery from './pages/Gallery'

export default function App() {
  return (
   <>
    <Routes>
      <Route index element={<Post />} />
      <Route path='products' element={<Products />} />
      <Route path='star-wars' element={<StarWars />} />
      <Route path='gallery' element={<Gallery />} />
    </Routes>
   </>
  )
}
