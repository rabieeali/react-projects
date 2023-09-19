export async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) {
        throw ('Failed to fetch posts.', { status: 500 })
    }
    return res.json()
}


export async function getPostById(id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    if (!res.ok) {
        throw new Response('Failed to fetch posts.', { status: 500 })
    }
    return res.json()
}


export async function savePost(post) {
    if (post.title.trim().length < 5 || post.body.trim().length < 10) {
        throw { message: 'Invalid input data provided.', status: 422 }
    }
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: { "Content-Type": "application/json" }
    })

    if (!res.ok) {
        throw new Response('Could not save post.', { status: 500 })
    }
}


export async function getSlowPosts() {
    await new Promise((res, rej) => (setTimeout(() => { res() }, 2000)))
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) {
        throw new Response('Failed to fetch posts.', { status: 500 })
    }
    return res.json()
}