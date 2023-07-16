import { useState, createContext } from 'react'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [auth, setAuth] = useState()
    return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
}