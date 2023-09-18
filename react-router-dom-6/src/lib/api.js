export async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) {
        throw { message: 'failed to fetch posts.', status: 500 }
    }
    return res.json()
}


export async function getPostById(id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    if (!res.ok) {
        throw { message: 'failed to fetch posts.', status: 500 }
    }
    return res.json()
}