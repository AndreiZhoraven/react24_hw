import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import thunks from "./../../store/countries/thunks";
import {setCountry, setTranslations} from './../../store/countries/slice'
import "./index.css";

import BtnNavigation from './../BtnNavigation/BtnNavigation'

export default function CitiesSelect() {
    const dispatch = useDispatch();
    const countries = useSelector((store) => store.countries.countries);
    const country = useSelector((store) => store.countries.country);
    const translations = useSelector((store) => store.countries.translations);

    useEffect(() => {
        !countries.length && dispatch(thunks.fetchCountries());
    }, []);

    useEffect(() => {
        dispatch(setCountry())
        dispatch(setTranslations())
    }, [countries])

    const handleCapitalSelect = event => {
        dispatch(setCountry(event.target.value))
    }

    const handleTranslationSelect = event => {
        dispatch(setTranslations(event.target.value))
    }

    return (
        <div className="component">
            <h3 className="title">Capital Form</h3>
            {countries.length ? (
                <div className="form-container">
                    <div className="form-group">
                        <label htmlFor="capital-select" className="form-label">Select Capital</label>
                        <select onChange={handleCapitalSelect} id="capital-select" className="form-select">
                            {countries.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.flag} {item.capital}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="translation-select" className="form-label">Select Translation</label>
                        <select onChange={handleTranslationSelect} id="translation-select" className="form-select">
                            {Object.entries(translations).map(([language]) => (
                                <option key={language} value={language}>
                                    {language}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            ) : null}
            {country &&
                <BtnNavigation title={`Read more about ${country.name.common}`} path={`/countries/${country.id}`}/>}
        </div>
    );

}
