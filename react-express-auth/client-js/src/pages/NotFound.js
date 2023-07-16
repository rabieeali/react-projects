import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'

export function NotFound() {
    return (
        <Layout>
            <h1 className='text-center text-danger'>Page Not Found</h1>
            <Link to='/' className='text-center mx-auto d-block w-25 mt-5 btn btn-outline-primary'>Go Home</Link>
        </Layout>
    )
}
