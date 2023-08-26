import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '/public/simplex.css'; // to prevent naked web page after refresh and theme-select
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HelmetProvider } from 'react-helmet-async';

import { Provider } from 'react-redux';
import { store } from '@/app/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
