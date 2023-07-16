import { ReactNode } from "react";
import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";


export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <header className='w-100 bg-info text-white py-3 px-5 mb-5'><Navbar /></header>
            <main className='container'>{children}</main>
            <footer><Footer /></footer>
        </>
    )
}