import { createSlice } from "@reduxjs/toolkit";
import { featureName } from "./constants";
import thunks from "./thunks";

const initialState = {
  countries: [],
  country: null,
};

export const counterSlice = createSlice({
  name: featureName,
  initialState,
  reducers: {
    setCountry(state, { payload }) {
      if (payload) {
        state.country = state.countries.find((item) => item.id === payload);
      } else if (state.countries.length) {
        state.country = state.countries[0];
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunks.fetchCountries.fulfilled, (state, { payload }) => {
        state.countries = payload;
      })
      .addCase(thunks.fetchCountry.fulfilled, (state, { payload }) => {
        state.country = payload;
      })
      .addCase(thunks.deleteCountry.fulfilled, (state, { payload }) => {
        state.countries = state.countries.filter(item => item.id !== payload);
      });
  },
});

export const { setCountry } = counterSlice.actions;
export default counterSlice.reducer;
