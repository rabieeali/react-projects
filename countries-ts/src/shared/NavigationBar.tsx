import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { selectCurrentTheme } from '@/app/features/themeSlice';
import { useSelector } from 'react-redux';

import { Helmet } from 'react-helmet-async';
import ThemeSelect, { themeMap } from '@/shared/ThemeSelect';

const NavigationBar = () => {
  const theme = useSelector(selectCurrentTheme);

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet='utf-8' />
        <title>My React App</title>
        <link rel='stylesheet' href={themeMap[theme]} />
      </Helmet>

      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='/'>Countries App</Navbar.Brand>
          <ThemeSelect />
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Nav.Link href='#action1'>Home</Nav.Link>
              <Nav.Link href='#action2'>Link</Nav.Link>
              <NavDropdown title='Link' id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action5'>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#' disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className='d-flex'>
              <Form.Control
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-success'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
