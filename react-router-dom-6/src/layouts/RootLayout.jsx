import { Outlet } from "react-router-dom"

export default function RootLayout() {
    return (
        <main className="container my-5">
            <Outlet />
        </main>
    )
}
