import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import { getAllCountries, getCountryByName } from '@/api/axios';

interface CountryState {
  countries: Country[];
  loading: boolean;
  error: string | null;
  country: NonNullable<unknown>;
}

const initialState: CountryState = {
  countries: [],
  loading: false,
  error: null,
  country: {},
};

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => await getAllCountries()
);

export const fetchCountry = createAsyncThunk(
  'country/fetchCountry',
  async (name: string) => await getCountryByName(name)
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
      })
      .addCase(fetchCountry.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountry.fulfilled, (state, action) => {
        state.country = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCountry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch country';
      });
  },
});

export const selectCountries = (state: RootState) => state.country;

export default countrySlice.reducer;
