import { createAsyncThunk } from "@reduxjs/toolkit";
import { featureName } from "./constants";
import service from "./../../services/countries";

const thunks = {
  fetchCountries: createAsyncThunk(
    `${featureName}/fetchCountries`,
    async () => {
      let response = await service.get(`countries`);
      return response;
    }
  ),
  fetchCountry: createAsyncThunk(
    `${featureName}/fetchCountry`,
    async (payload) => {
      let response = await service.get(`countries`, payload);
      return response;
    }
  ),
  deleteCountry: createAsyncThunk(
    `${featureName}/deleteCountry`,
    async (payload) => {
      await service.delete(`countries`, payload);
      return payload;
    }
  ),
};

export default thunks;
