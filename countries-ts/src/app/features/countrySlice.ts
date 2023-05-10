import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '@/app/store';

interface CountryState {
    countries: Country[];
    loading: boolean;
    error: string | null;
}

const initialState: CountryState = {
    countries: [],
    loading: false,
    error: null,
};

export const fetchCountries = createAsyncThunk(
    'countries/fetchCountries',
    async () => {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        return response?.data;
    }
);

const countrySlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.countries = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch countries';
            });
    },
});

export const selectAllCountries = (state: RootState) => state.country

export default countrySlice.reducer;
