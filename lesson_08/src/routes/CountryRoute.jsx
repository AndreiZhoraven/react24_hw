import React from 'react'

import Country from './../components/Country/Country'
import BtnNavigation from './../components/BtnNavigation/BtnNavigation'

export default function CountryRoute() {
  return (
    <div>
      <h3>Country Route</h3>
      <Country />
      <BtnNavigation title={"Back to countries"} path={"/countries"} />
    </div>
  )
}