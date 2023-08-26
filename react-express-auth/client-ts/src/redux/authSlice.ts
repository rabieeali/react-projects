import { createSlice } from '@reduxjs/toolkit'
import { User } from 'src/types'
import { RootState } from './store';

interface State {
    user: User | null
    token: string
}

const initialState: State = {
    user: null,
    token: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { token, user } = action.payload;
            state.user = user;
            state.token = token;
            localStorage.setItem(import.meta.env.VITE_TOKEN_NAME, token);
          },
        logout: (state) => {
            state.user = null
            state.token = ''
            localStorage.removeItem(import.meta.env.VITE_TOKEN_NAME)
        }
    }
});

export const selectAuth = (state: RootState) => state.auth

export const { setUser, logout } = authSlice.actions

export default authSlice.reducer