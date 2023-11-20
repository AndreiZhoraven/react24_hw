import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'

import {fetchCountry} from './../../store/countries/thunks'

export default function Country() {
    const country = useSelector(store => store.countries.country);
    const {id} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
      !country && dispatch(fetchCountry(id));
    }, [])

  return (
    <div className='component'>
        {country ? <ul>
            {Object.keys(country).map((key, index) => <li key={index}>{key}: {country[key]}</li>)}
        </ul> : null}
    </div>
  )
}