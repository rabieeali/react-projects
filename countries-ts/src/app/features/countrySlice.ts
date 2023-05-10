import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import { getAllCountries } from '@/api/axios';

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

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => await getAllCountries());

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
