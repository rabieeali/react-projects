import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'

export function Navbar() {
    // eslint-disable-next-line 
    const [{ tut }, setCookie, removeCookie] = useCookies(['tut']);
    const navigate = useNavigate()

    const handleLogout = () => {
        removeCookie('tut')
        navigate('/')
    }

    return (
        <nav className='d-flex align-items-center gap-4'>
            <Link to='/' className='nav-link text-white'>Home</Link>
            <Link to='/dashboard' className='nav-link text-white'>Dashboard</Link>
            {!tut ? <Link to='/login' className='nav-link text-white'>Login</Link> : <button onClick={handleLogout} className='btn btn-sm btn-info rounded-5'>logout</button>}
        </nav>
    )
}
