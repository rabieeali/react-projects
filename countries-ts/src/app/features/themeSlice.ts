import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/app/store';


const initialState = {
    theme: '1'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            return { ...state, theme: action.payload }
        }
    }
});

export const selectCurrentTheme = (state: RootState) => state.theme.theme

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer