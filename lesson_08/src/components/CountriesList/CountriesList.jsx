import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import thunks from "./../../store/countries/thunks";

import Button from "./../Button/Button";

export default function CountriesList() {
  const dispatch = useDispatch();
  const countries = useSelector((store) => store.countries.countries);

  useEffect(() => {
    !countries.length && dispatch(thunks.fetchCountries());
  }, []);

  const handleDelete = (id) => dispatch(thunks.deleteCountry(id));

  return (
    <div className="component">
      {countries.map((item) => (
        <li key={item.id}>
          <Link to={String(item.id)}>{item.name}</Link>{" "}
          <Button
            title="Delete country"
            clickFn={() => handleDelete(item.id)}
          />
        </li>
      ))}
    </div>
  );
}
