import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {

  const date = new Date()
  const year = date.getFullYear()


  return (
    <Container>
      <footer className='border-top border-danger text-center py-3' >
        Made With ❤ By Me! {year}
      </footer>
    </Container>
  )
}

export default Footer