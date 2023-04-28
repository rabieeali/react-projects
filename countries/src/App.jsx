import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CountryPage from './pages/CountryPage'

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/country/:name' element={<CountryPage />} />
    </Routes>

  )
}

export default App