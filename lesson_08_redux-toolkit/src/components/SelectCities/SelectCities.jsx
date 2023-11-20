import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'

import { fetchCountries } from "./../../store/countries/thunks";
import {setCountry} from './../../store/countries/slice'

export default function SelectCities() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const countries = useSelector((store) => store.countries.countries);
  const country = useSelector(store => store.countries.country)

  useEffect(() => {
    !countries.length && dispatch(fetchCountries());
  }, []);

  useEffect(() => {
    !country && dispatch(setCountry());
  }, [countries])

  const handleSelect = event => dispatch(setCountry(event.target.value));

  const handleClick = () => navigation(`countries/${country.id}`)

  return (
    <div className="component">
      {countries.length ? (
        <select onChange={handleSelect} defaultValue={country && country.id}>
          {countries.map((item) => (
            <option key={item.id} value={item.id}>
              {item.capital}
            </option>
          ))}
        </select>
      ) : null}
      {country ? <button onClick={handleClick}>Read more about {country.name}</button> : null}
    </div>
  );
}
