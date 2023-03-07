import { useState, useEffect } from 'react'
import userServices from "../services/userService"
import { AxiosError } from 'axios'
import { IUser } from '../model'



const GetAllUsersPage = () => {

  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")


  const getUsers = async () => {
    setLoading(true)

    try {
      const usersFromApi = await userServices.getAllUser()
      setUsers(usersFromApi)
    } catch (error) {
      const err = error as AxiosError
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  if (loading) {
    return (<p>Loading ...</p>)
  }

  if (!loading && error) {
    return (<p>{error}</p>)
  }

  return (
    <div className="App">
      <ul>
        {users?.map(user => (<li key={user.id}>{user.name}</li>))}
      </ul>
    </div>
  )
}

export default GetAllUsersPage