import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts',
            providesTags: ['PostList']
        }),
        getPost: builder.query({
            query: (id) => '/posts/' + id
        }),
        addPost: builder.mutation({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['PostList']
        })
    })
})


export const { useGetPostsQuery, useGetPostQuery, useAddPostMutation } = apiSlice