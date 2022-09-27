import axios from 'axios'

// https://jsonplaceholder.typicode.com/posts

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
})