import { useState, useEffect } from 'react'
import Layout from '../layout/Layout'
import axios from '../api/axios'

import Card from '../components/Card';
import { useSearch } from '../context/SearchProvider';

const Home = () => {
    const [posts, setPosts] = useState();
    const search = useSearch()


    const getData = async () => {
        try {
            const response = await axios.get()
            setPosts(response?.data)

        } catch (error) {
            console.log(error.message)
            throw new Error("Oops! Something Bad Happened!")
        }
    }


    useEffect(() => {
        getData()
    }, [])




    return (

        <Layout>
            <section className='row my-3 g-2'>
                {
                    posts ?
                        posts.map((p) => {

                            if (p.title.toLowerCase().includes(search.toLowerCase())) {
                                return (
                                    <div className='col-md-3'>
                                        <Card {...p} />
                                    </div>
                                )
                            }
                        })
                        : (<h1 className='display-1 text-center text-warning'>Loading ...</h1>)

                }
            </section>
        </Layout>
    )
}

export default Home