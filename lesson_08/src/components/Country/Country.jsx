import React, {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import thunks from "./../../store/countries/thunks";

import Button from "./../Button/Button";

export default function Country() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const country = useSelector((store) => store.countries.country);
    const translations = useSelector((store) => store.countries.translations);

    useEffect(() => {
        dispatch(thunks.fetchCountry(id));
    }, []);

    const handleDelete = async () => {
        await dispatch(thunks.deleteCountry(id));
        navigation("/countries");
    };

    function renderCountryList(country) {
        return (
            <ul>
                {Object.entries(country).map(([key, value]) => (
                    <li key={key}>
                        {key}: {key === 'capital' ? value[0] :
                        typeof value === 'object' ? renderCountryList(value) : value.toString()}
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div className="component"><h3
            className="title"> {Object.values(translations)[0] ? Object.values(translations)[0].official : country.name.official}</h3>
            <div>
                {renderCountryList(country)}
            </div>
            <Button title={"Delete country"} clickFn={handleDelete}/>
        </div>
    );
}
