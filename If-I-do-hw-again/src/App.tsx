import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryDetail from './pages/CountryDetail';

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/counrty/:name' element={<CountryDetail />} />
      </Routes>
    </>
  );
};

export default App;
