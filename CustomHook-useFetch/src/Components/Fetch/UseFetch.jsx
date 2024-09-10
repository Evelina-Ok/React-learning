import { useState, useEffect } from "react";

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
