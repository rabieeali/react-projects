
import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams, useLocation} from 'react-router-dom'
import Layout from '../layout/Layout'




const Posts = () => {
    const location = useLocation()
    const data = location.state

    const { id } = useParams()

    return (
        <Layout>

            <Container>

                <div className='card p-3 mt-5'>

                    <h1 className='text-center'>This is Post Number #{id} </h1>
                    <h4>{data.title}</h4>
                    <p>{data.body}</p>
                </div>

            </Container>
        </Layout>


    )
}

export default Posts