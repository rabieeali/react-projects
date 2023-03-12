import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GetAllUsersPage from './pages/AllUsersPage'
import AddNewUserPage from './pages/AddNewUserPage'

import UserProvider from './context/UserProvider'
import UserPage from './pages/UserPage'
import NotFound from './pages/NotFound'
import HowToUsePage from './pages/HowToUsePage'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/how-to-use" element={<HowToUsePage />} />
          <Route path="/get-all-users" element={<GetAllUsersPage />} />
          <Route path="/add-new-user" element={<AddNewUserPage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
)
