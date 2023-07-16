import { Navigate, Outlet } from 'react-router-dom'
import { useCookies } from 'react-cookie'

export function Protect() {
    const [{ tut }] = useCookies(['tut']);
    return tut ? <Outlet /> : <Navigate to='/login' />
}
