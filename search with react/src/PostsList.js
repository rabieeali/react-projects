import PostCard from "./PostCard"


const PostsList = ({ searchTerm }) => {
    return (
        <section className="row g-3">
            {
               searchTerm && searchTerm.map((post,index) => <PostCard index={index} key={post.id} title={post.title} body={post.body} />)
            }
        </section>
    )
}

export default PostsList