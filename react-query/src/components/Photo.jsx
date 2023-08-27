
export default function Photo({ title, url, thumbnailUrl }) {
    return (
        <div className='col-9 offset-2 card p-2'>
            <p>{title}</p>
            <img width={150} height={150} src={url} alt={title} />
        </div>
    )
}
