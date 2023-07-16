import { configureStore } from '@reduxjs/toolkit'
import { authApi } from 'src/redux/authApi'
import AuthReducer from 'src/redux/authSlice'

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: AuthReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
