import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "src/redux/authSlice";
import { ApplicationRoutes } from 'src/routes'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'

export default function Navbar() {
    const token = localStorage.getItem(import.meta.env.VITE_TOKEN_NAME) || '';
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(setUser({ user: null, token: '' }))
        navigate(ApplicationRoutes.homepage)
    }

    return (
        <nav className="d-flex align-items-center gap-4 text-capitalize">
            <Link className='nav-link' to={ApplicationRoutes.homepage}>homepage</Link>
            {token && <Link className='nav-link' to={ApplicationRoutes.dashboard}>dashboard</Link>}
            {token ? <button onClick={handleLogout} className="btn btn-sm btn-danger ms-auto">Logout</button> : <Link className='nav-link ms-auto' to={ApplicationRoutes.login}>
                <button className="btn btn-sm btn-primary">
                    Login <ArrowRightOnRectangleIcon height={17} width={17} />
                </button>
            </Link>}
        </nav>
    )
}
