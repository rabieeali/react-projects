import { Link } from "react-router-dom"



export default function Navbar() {
    return (
        <nav className="py-2 px-4 d-flex justify-content-between align-items-center bg-black">
            <Link className="text-white" to='/'>Posts</Link>
            <Link className="text-white" to='add-post'>Add New Post</Link>
            <Link className="text-white" to='slow-posts'>Slow Post</Link>
        </nav>
    )
}
