import React from 'react'

import Home from './../components/Home/Home'
import SelectCities from './../components/SelectCities/SelectCities'

export default function HomeRoute() {
  return (
    <div>
      <h3>Home Route</h3>
      <Home />
      <SelectCities />
    </div>
  )
}