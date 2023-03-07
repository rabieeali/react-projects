import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GetAllUsersPage from './pages/GetAllUsersPage'
import AddNewUserPage from './pages/AddNewUserPage'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/get-all-users" element={<GetAllUsersPage />} />
        <Route path="/add-new-user" element={<AddNewUserPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
