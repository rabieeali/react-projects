import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SWRConfig } from 'swr';
import { SWROption } from './configs/index.ts';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <SWRConfig value={SWROption}>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </BrowserRouter>
      </SWRConfig>
    </ChakraProvider>
  </React.StrictMode>
);
