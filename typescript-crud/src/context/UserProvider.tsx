import { useState, createContext, useContext } from 'react'
import { IChildren, IUser, IUserContext } from '../model'


interface IinitState {
    users: [],
    setUsers: () => void

}

const initialState: IinitState = {
    users: [],
    setUsers: () => { }
}

const usersContext = createContext<IUserContext>(initialState)


const UserProvider = ({ children }: IChildren) => {
    const [users, setUsers] = useState<IUser[]>([])
    return (
        <usersContext.Provider value={{ users, setUsers }}>
            {children}
        </usersContext.Provider>
    )
}

export const useUsers = () => useContext(usersContext)

export default UserProvider