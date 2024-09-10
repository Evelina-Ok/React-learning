import { useState, useEffect } from "react";

export function useFetch (url) {
    const [data, setData] = useState ();

    useEffect(() => {
        const getData = async () => {
            try {
                let response = await fetch (url)
                let fetchedData = await response.json ()
            }
            catch (error) {}
            console.error('useFetch error', error);      
            
            setData(fetchedData);
        }
        getData ();
    }, [url]);
    return {data, error}
}