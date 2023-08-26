import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { SingleCountryPage } from './pages/SingleCountryPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/country/:name' element={<SingleCountryPage />} />
      </Routes>
    </>
  );
};

export default App;
