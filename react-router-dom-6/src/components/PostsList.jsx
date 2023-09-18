import { Link } from "react-router-dom";

export default function PostsList({ posts }) {

    return (
        <div className="row gap-3">
            {posts.map((p) => (
                <article key={p.id} className="col-md-2 card">
                    <p>{p.title}</p>
                    <p>{p.body}</p>
                    <Link to={`post/${p.id}`} className='btn btn-sm btn-primary'>visit post</Link>
                </article>
            ))}
        </div>
    )
}
