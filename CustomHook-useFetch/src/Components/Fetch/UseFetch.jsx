import { useState, useEffect } from "react";
import { ShowUsers } from "../Users/Users";

export function useFetch (url) {
    const [userData, setUserData] = useState ([]);
    const [error, setError] = useState();

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setUserData(data))

        .catch((error) => setError(error))
            
    }, [url]);
    return {userData, error};
}
