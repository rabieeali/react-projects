
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import Posts from './pages/Posts'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  )
}

export default App