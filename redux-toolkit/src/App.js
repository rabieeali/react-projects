import { useState } from 'react'
import { useGetPostsQuery } from './redux/apiSlice'
import Details from './Details.component'
import Form from './Form.component'

const App = () => {
  const { data: posts, isLoading: isPostsLoading, error: postsError } = useGetPostsQuery()
  const [id, setId] = useState()

  return (
    <div className='container mx-auto p-4'>
      <section className='grid grid-cols-2 gap-10'>
        <article>

          <h1>Posts</h1>
          {isPostsLoading && <p className='text-indigo-500'>loading ...</p>}
          {postsError && <p className='text-rose-800'>{JSON.stringify(postsError)}</p>}
          <ul>
            {posts?.map((post, index) => (
              <li onClick={() => setId(post.id)} key={post.id} className='text-sm text-zinc-500 cursor-pointer'>
                {index}. {post.title}
              </li>
            ))}
          </ul>
          {id &&
            <>
              <hr className='my-5' />
              <h1>Details</h1>
              <Details id={id} />
            </>
          }
        </article>
        <article>
          <Form />
        </article>
      </section>
    </div>
  )
}

export default App