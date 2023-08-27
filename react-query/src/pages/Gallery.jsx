import { useInfiniteQuery } from "react-query"
import Photo from "../components/Photo"
import InfiniteScroll from "react-infinite-scroller"

const getData = async (pageParam = 1) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${pageParam}`)
  return await res.json()
}

export default function Gallery() {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetching, isError, error } = useInfiniteQuery('gallery', ({ pageParam = 1 }) => getData(pageParam), {
    getNextPageParam: (lastPage, allPages) => lastPage.length ? allPages.length + 1 : undefined
  })


  if (isLoading) return (<p>loading ...</p>)
  if (isError) return (<p>error! {error.toString()}</p>)

  return (
    <div className='container my-5'>
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        <div className='row gap-3'>
          {data.pages.flat().map((pg) => (
            <Photo
              key={pg.id}
              title={pg.title}
              thumbnailUrl={pg.thumbnailUrl}
              url={pg.url}
            />
          ))}
          {isFetching && (<div class='spinner-border w-full d-block mx-auto' role='status'></div>)}
        </div>
      </InfiniteScroll>
    </div>
  )
}
