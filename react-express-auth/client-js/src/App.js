import { Routes, Route } from 'react-router-dom'
import { Homepage, Dashboard, Login, NotFound } from './pages'
import { Protect } from './components/auth'
import { Persistent } from './components/auth/Persistent'

export default function App() {
  return (
    <Routes>
      <Route element={<Persistent />}>
        <Route index element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route element={<Protect />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
