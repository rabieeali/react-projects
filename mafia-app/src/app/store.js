import { configureStore } from '@reduxjs/toolkit';
import PeopleReducer from '../features/NamesSlice'

export const store = configureStore({
    reducer: {
        people: PeopleReducer
    }
})