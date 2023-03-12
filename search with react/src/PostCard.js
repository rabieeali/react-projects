
const PostCard = ({ title, body , index }) => {
    return (
        <article className="col-md-3">
            <div className="card shadow border-0 p-3 h-100">  
                <h3 className="fw-bolder"> <strong className="text-success">{index+1}</strong>- {title}</h3>
                <p className="text-secondary">{body}</p>
            </div>
        </article>
    )
}

export default PostCard