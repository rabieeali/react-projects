import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import UserPage from './pages/UserPage'

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='user/:id' element={<UserPage />} />
      </Routes>
    </>
  )
}
