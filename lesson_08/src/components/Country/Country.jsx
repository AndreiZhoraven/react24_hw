import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import thunks from "./../../store/countries/thunks";

import Button from "./../Button/Button";

export default function Country() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const country = useSelector((store) => store.countries.country);

  useEffect(() => {
    dispatch(thunks.fetchCountry(id));
  }, []);

  const handleDelete = async () => {
    await dispatch(thunks.deleteCountry(id));
    navigation("/countries");
  };

  return (
    <div className="component">
      <ul>
        {country
          ? Object.keys(country).map((key, index) => (
              <li key={index}>
                {key}: {country[key]}
              </li>
            ))
          : null}
      </ul>
      <Button title={"Delete country"} clickFn={handleDelete} />
    </div>
  );
}
