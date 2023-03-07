import { Link } from 'react-router-dom'


const App = () => {

  return (
    <>
      <ul>
        <li><Link to="/get-all-users">See All Users</Link></li>
        <li><Link to="/add-new-user">Add New User</Link></li>
      </ul>

    </>
  )
}

export default App
