import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from '@/app/features/themeSlice'
import CountryReducer from '@/app/features/countrySlice'

export const store = configureStore({
    reducer: {
        theme: ThemeReducer,
        country: CountryReducer
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch