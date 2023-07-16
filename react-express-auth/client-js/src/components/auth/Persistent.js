import { useAuth } from '../../hooks'
import { AuthService } from '../../api'
import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import { Spinner } from '../Spinner';

export function Persistent() {
    //  eslint-disable-next-line
    const [{ tut }, setCookie, removeCookie] = useCookies(['tut']);
    const [isLoading, setIsLoading] = useState(false)

    const { setAuth } = useAuth()
    const { reAuth } = new AuthService()
    const navigate = useNavigate()

    const handleReAuth = async (token) => {
        try {
            setIsLoading(true)
            const { data } = await reAuth(token)
            setAuth({ email: data.email, first_name: data.first_name, last_name: data.last_name })

        } catch (err) {
            console.log(err)
            removeCookie('tut')
            navigate('/login')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        tut && handleReAuth(tut)
        //  eslint-disable-next-line
    }, [])

    return isLoading ? <Spinner /> : <Outlet />
}
