import { useState, useEffect } from 'react'
import userServices from "../services/userService"
import { AxiosError } from 'axios'
import { useUsers } from '../context/UserProvider'
import { IUser } from '../model'
import { Link, NavLink } from 'react-router-dom'



const GetAllUsersPage = () => {

  const { users, setUsers } = useUsers()

  const [refetch, setRefetch] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")


  const getUsers = async () => {
    setLoading(true)

    try {
      const usersFromApi: IUser[] = await userServices.getAllUser()
      setUsers(usersFromApi)
    } catch (error) {
      const err = error as AxiosError
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }


  const deletHandler = async (id: number | string): Promise<void> => {
    try {
      await userServices.deleteUser(id)
      await setRefetch(pre => !pre)
    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    getUsers()
  }, [refetch])

  if (loading) {
    return (<p>Loading ...</p>)
  }

  if (!loading && error) {
    return (<p>{error}</p>)
  }

  return (
    <div className='App'>
      <ul className='col'>
      <Link to="/add-new-user">Add New User</Link>
        {users?.map((u) => (
          <div key={u.id} className='row'>
            <li>
              <strong>
                <NavLink className='text-white' to={`/user/${u.id}`}>{u.name}</NavLink>
                </strong> - <small>({u.email}</small>)</li>
            <button onClick={() => deletHandler(u.id)}>delete</button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default GetAllUsersPage