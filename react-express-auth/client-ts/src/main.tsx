import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'src/App.tsx'
import 'src/bootstrap.min.css'
import 'src/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
