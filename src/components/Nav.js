
import { Link } from 'react-router-dom'
import { useSearchDispatcher } from '../context/SearchProvider'

const Nav = () => {
    const dispatch = useSearchDispatcher()

    const onChange = (e) => dispatch(e.target.value)



    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand fs-1">📝</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                
                    <form className="d-flex ms-auto">
                        <input onChange={onChange} className="form-control me-sm-2" type="search" placeholder="Search..." />
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Nav