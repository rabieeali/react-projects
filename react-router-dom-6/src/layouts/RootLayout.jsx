import { Outlet } from "react-router-dom"
import { Navbar } from "../components"

export default function RootLayout() {
    return (
        <>
        <Navbar />
        <main className="container my-5">    
            <Outlet />
        </main>
        </>
    )
}
