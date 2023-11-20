import { createSlice } from '@reduxjs/toolkit'

import {featureName} from './constants'
import {fetchCountries, fetchCountry} from './thunks'

const initialState = {
  countries: [],
  country: null
}

export const countriesSlice = createSlice({
  name: featureName,
  initialState,
  reducers: {
    setCountry(state, {payload}){
        if(state.countries.length){
            if(payload){
                state.country = state.countries.find(item => item.id === payload)
            } else{
                state.country = state.countries[0];
            }
        }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.fulfilled, (state, {payload}) => {
       state.countries = payload;
      })
      .addCase(fetchCountry.fulfilled, (state, {payload}) => {
        state.country = payload;
       })
  },
})

export const {setCountry} = countriesSlice.actions;

export default countriesSlice.reducer