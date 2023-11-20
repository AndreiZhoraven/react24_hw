import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import thunks from "./../../store/countries/thunks";
import {setCountry} from './../../store/countries/slice'

import BtnNavigation from './../BtnNavigation/BtnNavigation'

export default function CitiesSelect() {
  const dispatch = useDispatch();
  const countries = useSelector((store) => store.countries.countries);
  const country = useSelector((store) => store.countries.country);

  useEffect(() => {
    !countries.length && dispatch(thunks.fetchCountries());
  }, []);

  useEffect(() => {
    dispatch(setCountry())
  }, [countries])

  const handleSelect = event => dispatch(setCountry(event.target.value))

  return (
    <div className="component">
      {countries.length ? (
        <select onChange={handleSelect}>
          {countries.map((item) => (
            <option key={item.id} value={item.id}>
              {item.capital}
            </option>
          ))}
        </select>
      ) : null}
      {country && <BtnNavigation title={`Read more about ${country.name}`} path={`/countries/${country.id}`} />}
    </div>
  );
}
