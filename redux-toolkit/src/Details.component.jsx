import { useGetPostQuery } from './redux/apiSlice'

const Details = ({ id }) => {
    const { data: singlePost, isLoading: isSinglePostLoading } = useGetPostQuery(id)


    return (
        <div className='flex flex-col gap-2'>
            <p className='text-sm text-zinc-500'>{isSinglePostLoading ? 'loading ...' : singlePost.body}</p>
        </div>
    )
}

export default Details