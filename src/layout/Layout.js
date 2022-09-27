
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import Nav from '../components/Nav'


const Layout = ({ children }) => {

    return (
        <div className='d-flex flex-column justify-content-between vh-100'>
            <Nav />
            <Container>
                {children}
            </Container>
            <Footer />
        </div>

    )
}

export default Layout