import { Routes, Route } from 'react-router-dom'
import { ApplicationRoutes } from 'src/routes'
import Homepage from 'src/pages/Homepage'
import Dashboard from 'src/pages/Dashboard'
import Login from 'src/pages/Login'
import { Provider } from 'react-redux'
import { store } from 'src/redux/store'
import Protected from 'src/shared/Protected'


export default function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path={ApplicationRoutes.login} element={<Login />} />
        <Route element={<Protected />}>
          <Route path={ApplicationRoutes.dashboard} element={<Dashboard />} />
        </Route>
      </Routes>
    </Provider>
  )
}