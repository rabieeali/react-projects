import {  Routes, Route } from 'react-router-dom'
import EnterNames from './pages/EnterNames'
import Director from './pages/Director'
import HaveRoles from './pages/HaveRoles'
import SelectRoles from './pages/SelectRoles'


const App = () => {
  return (
    <Routes>
      <Route index element={<EnterNames />} />
      <Route path='/select-roles' element={<SelectRoles />} />
      <Route path='/have-roles' element={<HaveRoles />} />
      <Route path='/director' element={<Director />} />
    </Routes>
  )
}

export default App