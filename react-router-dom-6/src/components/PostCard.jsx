
export default function PostCard({ title, body }) {
    return (
        <div className="card bg-black">
            <h1 className="text-white">{title}</h1>
            <p className="text-white">{body}</p>
        </div>
    )
}
