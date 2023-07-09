import Link from "next/link"

export const Navbar = () => {
    return (
        <>
            <nav className="d-flex justify-content-center align-items-center gap-5">
                <Link className="nav-link text-white" href='/login'>Login</Link>
                <Link className="nav-link text-white" href='/'>Home</Link>
                <Link className="nav-link text-white" href='/profile'>Profile</Link>
            </nav>
        </>
    )
}
