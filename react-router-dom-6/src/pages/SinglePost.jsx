import { useLoaderData } from "react-router-dom"
import { PostCard } from "../components"
import { getPostById } from "../lib/api"

export default function SinglePost() {
    const laoderData = useLoaderData()
    
    return (
        <>
            <PostCard title={laoderData.title} body={laoderData.body} />
        </>
    )
}

export function loader({ params }) {
    const postId = params.id
    return getPostById(postId)
}