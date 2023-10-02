import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'

const isDevMode = process.env.NODE_ENV === 'development'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: isDevMode
})