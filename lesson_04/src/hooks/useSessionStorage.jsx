import {useState, useEffect} from "react";

const useSessionStorage = (key, defaultValue) => {
    const [value, setValue] = useState(
        sessionStorage.getItem(key)
            ? JSON.parse(sessionStorage.getItem(key))
            : defaultValue
    );

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};

export default useSessionStorage;
