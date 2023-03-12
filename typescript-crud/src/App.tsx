import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <ul className='row'>
        <li className='btn'><Link to="/get-all-users">See All Users</Link></li>
        <li className='btn'><Link to="/add-new-user">Add New User</Link></li>
        <li className='btn btn-danger'><Link to="/how-to-use">How To Use This App</Link></li>
      </ul>

    </>
  )
}

export default App
