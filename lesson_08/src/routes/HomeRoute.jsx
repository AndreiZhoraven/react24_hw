import React from "react";

import Home from "./../components/Home/Home";
import CitiesSelect from './../components/CitiesSelect/CitiesSelect'

export default function HomeRoute() {
  return (
    <div>
      <h3>Home Route</h3>
      <Home />
      <CitiesSelect />
    </div>
  );
}