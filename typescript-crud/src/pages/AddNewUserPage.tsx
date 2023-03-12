import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { IUserObject } from '../model'
import UserService from '../services/userService'
import { useNavigate } from "react-router-dom"


const AddNewUserPage = () => {
  const navigate = useNavigate()

  const [error, setError] = useState<string>("")
  const [user, setUser] = useState<IUserObject>({
    email: '',
    name: ''
  })


  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setUser({ ...user, [name]: value })
  }

  const isEmpty = Object.values(user).some(item => item === "")

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (isEmpty) {
        return setError("please fill the fileds")
      }
      await UserService.addNewUser(user)
      navigate("/get-all-users")
    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    setError("")
  }, [user.email, user.name])

  return (
    <div className="App">
      <form onSubmit={onSubmit} className="form">
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={onChange} name="name" id="name" type="text" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input onChange={onChange} name="email" id="email" type="email" />
        </div>
        <button type="submit">Add</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  )
}

export default AddNewUserPage