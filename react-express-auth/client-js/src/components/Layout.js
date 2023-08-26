import { Navbar } from './Navbar'

export function Layout({ children }) {
    return (
        <>
            <header className='bg-dark d-flex justify-content-center align-items-center py-4'>
                <Navbar />
            </header>
            <main className='container mt-5'>{children}</main>
        </>
    )
}
