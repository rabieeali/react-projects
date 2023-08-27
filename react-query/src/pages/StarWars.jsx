import React from 'react'
import { useInfiniteQuery } from 'react-query'
import InfiniteScroll from 'react-infinite-scroller';
import Person from '../components/Person';

const initialUrl = 'https://swapi.dev/api/people/'

const getData = async (url) => {
    const res = await fetch(url)
    const jRes = await res.json()
    return jRes
}

export default function StarWars() {

    const { data, fetchNextPage, hasNextPage, isLoading, isFetching, isError, error } = useInfiniteQuery('sw-people', ({ pageParam = initialUrl }) => getData(pageParam), {
        getNextPageParam: (lastPage, allPages) => lastPage.next || undefined
    })

    //    isLoading: we are fetching and we have no cached data

    if (isLoading) return (<p>loading ...</p>)
    if (isError) return (<p>error! {error.toString()}</p>)

    return (
        <div className='container my-5'>
            <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
                <>
                    <div className='row gap-2'>
                        {data.pages.map((pageData) => {
                            return pageData.results.map((person) => {
                                return <Person
                                    key={person.name}
                                    name={person.name}
                                    hairColor={person.hair_color}
                                    eyeColor={person.eye_color}
                                />
                            })
                        })}
                    </div>
                    {isFetching && (<div class='spinner-border w-full d-block mx-auto' role='status'></div>)}
                </>
            </InfiniteScroll>
        </div>
    )
}
