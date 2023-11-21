import {createSlice} from "@reduxjs/toolkit";
import {featureName} from "./constants";
import thunks from "./thunks";

const initialState = {
    countries: [],
    country: null,
    translations: []
};

export const counterSlice = createSlice({
    name: featureName,
    initialState,
    reducers: {
        setCountry(state, {payload}) {
            if (payload) {
                state.country = state.countries.find((item) => item.id === payload);
            } else if (state.countries.length) {
                state.country = state.countries[0];
            }
        },
        setTranslations(state, {payload}) {
            if (payload) {
                state.translations = Object.entries(state.translations)
                    .filter(([language, _]) => language === payload)
                    .reduce((obj, [key, value]) => {
                        obj[key] = value;
                        return obj;
                    }, {});
            } else if (state.countries.length) {
                state.translations = state.country.translations;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(thunks.fetchCountries.fulfilled, (state, {payload}) => {
                state.countries = payload;
            })
            .addCase(thunks.fetchCountry.fulfilled, (state, {payload}) => {
                state.country = payload;
            })
            .addCase(thunks.deleteCountry.fulfilled, (state, {payload}) => {
                state.countries = state.countries.filter(item => item.id !== payload);
            });
    },
});

export const {setCountry, setTranslations} = counterSlice.actions;
export default counterSlice.reducer;
