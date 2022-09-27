import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {

    return (
        <article key={props.id} className='card bg-success text-white d-flex flex-column h-100 p-2 border-none shadow-lg'>
            <h4>{props.title}</h4>
            <p>{props.body}</p>
            <Link state={props} className='mt-auto text-decoration-none' to={`/posts/${props.id}`}>
                <button className='w-100 btn btn-danger'>Go To Post</button>
            </Link>
        </article>
    )
}

export default Card