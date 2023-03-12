import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useUsers } from "../context/UserProvider"
import { IUserObject } from "../model"
import userService from "../services/userService"


/*
    *** important note! ***

        refresh the page and see the users are gone with wind!
        don't believe me? 
        console.log(users) and refresh the page, initialy when you visit the page via the program
        it's and array of 10 objects(users)
        but when you refresh the page or visit the page via URL you will get "404 | No User Found!"

        that's because state is temporary and it's not persistant
        ofcourse you could use localStorage or something like that but that wouldn't be useful for all the information right?
        so what do we do?
        you can get the id from the url parameter 
        then make a GET call then fetch the user(you might need some checking in this step)
        then do the logic, but here we used the global state to find the user instead of calling the api for the user

        both ways are possible and it's up to you which startegy to utilize!
*/


const UserPage = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    let content;

    const { users } = useUsers()

    const foundUser = users.find(u => u.id == id)

    if (!foundUser) {
        return content = (<p>404 | No User Found!</p>)
    }


    const [updatedUser, setUpdatedUser] = useState<IUserObject>(foundUser)
    const [error, setError] = useState<string>("")



    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setUpdatedUser({ ...updatedUser, [name]: value })
    }


    const isEmpty = updatedUser.email.trim() === "" || updatedUser.name.trim() === ""

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            if (isEmpty) {
                return setError("please fill the fileds")
            }
            await userService.updateUser(updatedUser, foundUser.id)
            navigate("/get-all-users")
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        setError("")
    }, [updatedUser.email, updatedUser.name])

    content = (
        <>
            <form onSubmit={onSubmit} className="form">
                <div>
                    <label htmlFor="name">Name</label>
                    <input onChange={onChange} value={updatedUser.name} name="name" id="name" type="text" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={onChange} value={updatedUser.email} name="email" id="email" type="email" />
                </div>
                <button type="submit">Update</button>
            </form>
            {error && <div>{error}</div>}
        </>
    )


    return (
        <div className="App">
            {content}
        </div>
    )
}

export default UserPage