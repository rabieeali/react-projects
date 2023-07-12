import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { EndPoints } from 'src/redux/endpoints'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: EndPoints.baseUrl }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: EndPoints.login,
                method: 'POST',
                body: credentials
            }),
        }),
        reAuth: builder.query({
            query: (token) => ({
                url: EndPoints.reAuth,
                method: 'GET',
                headers: { "authorization": token }
            })
        })
    }),
})

export const { useLoginMutation, useReAuthQuery } = authApi