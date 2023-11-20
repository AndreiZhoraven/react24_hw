import { createAsyncThunk } from '@reduxjs/toolkit'
import {featureName} from './constants'
import countries from './../../services/countries'

const fetchCountries = createAsyncThunk(
    `${featureName}/fetchCountries`,
    async () => {
      const response = await countries.get(`countries`);
      return response;
    }
)

const fetchCountry = createAsyncThunk(
  `${featureName}/fetchCountry`,
  async (id) => {
    const response = await countries.get(`countries`, id);
    return response;
  }
)


export {fetchCountries, fetchCountry}