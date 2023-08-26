import { useEffect, useState } from "react"
import { useQuery, useQueryClient } from "react-query"

export default function Post() {
    const [postId, setPostId] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    let lastpage = 10

    const queryClient = useQueryClient()


    useEffect(() => {
        if (currentPage >= lastpage) return
        const nextPage = currentPage + 1
        queryClient.prefetchQuery(['posts', nextPage], () => fetchPosts(nextPage))

    }, [currentPage, queryClient])


    const fetchPosts = async (pgNum) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pgNum}`)
        const data = await res.json()
        return data
    }

    const fetchCommentsByPostId = async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        const data = await res.json()
        return data
    }

    const { data: posts, isLoading, isError } = useQuery(['posts', currentPage], () => fetchPosts(currentPage), {staleTime:2000,keepPreviousData:true})
    const { data: comments, isLoading: commentIsLoading, isError: commentIsError } = useQuery(['comments', postId], () => fetchCommentsByPostId(postId))

    const handlePreviousPage = () => {
        if (currentPage === 1) return
        setCurrentPage((pre) => (pre - 1))
    }

    const handleNextPage = () => {
        if (currentPage === lastpage) return
        setCurrentPage((pre) => (pre + 1))
    }

    return (
        <main className="container my-5">
            <div>
                {isLoading && (<p>posts are loading ...</p>)}
                {isError && (<p>error while fetching the posts</p>)}
                {posts?.map((post) => <div key={post.id}><p style={{ cursor: 'pointer' }} onClick={() => setPostId(post.id)}>{post.id}. {post.title}</p></div>)}
            </div>
            <div className="d-flex justify-content-between">
                <button className="btn bt-sm btn-primary" disabled={currentPage === 1} onClick={handlePreviousPage}>Previous</button>
                <p>Page {currentPage}</p>
                <button className="btn bt-sm btn-primary" disabled={currentPage === lastpage} onClick={handleNextPage}>Next</button>
            </div>
            
            <hr />
            <div className="">
                <h2>comments</h2>
                {commentIsLoading && (<p>comment is loading ...</p>)}
                {commentIsError && (<p>error while fetching the comment</p>)}
                <div className="row gap-3">

                    {comments?.map((comment) => (
                        <div className="col-md-3 card" style={{ width: '20rem' }} key={comment.id}>
                            <p>{comment?.name}</p>
                            <p>{comment?.email}</p>
                            <p>{comment?.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
