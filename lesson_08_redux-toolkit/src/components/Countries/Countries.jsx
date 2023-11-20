import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'

import { fetchCountries } from "./../../store/countries/thunks";

export default function Countries() {
  const dispatch = useDispatch();

  const countries = useSelector((store) => store.countries.countries);

  useEffect(() => {
    !countries.length && dispatch(fetchCountries());
  }, []);

  return countries.length ? (
    <div className="component">
      <ul>
        {countries.map((item) => (
          <li key={item.id}><Link to={String(item.id)}>{item.name}</Link></li>
        ))}
      </ul>
    </div>
  ) : null;
}
