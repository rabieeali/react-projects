
export default function SlowCards({ posts }) {

    return (
        <div>
            <p>slow content</p>
            <ul>
                {posts?.map(p => <li key={p.id}>{p.title}</li>)}
            </ul>
        </div>
    )
}
