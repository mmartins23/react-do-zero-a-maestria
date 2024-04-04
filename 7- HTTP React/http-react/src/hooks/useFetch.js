import { useState, useEffect } from 'react';

// 4- Custom Hooks
export const useFetch = (url) => {
    const [data, setData] = useState("");

    // 5- Refactoring Post

    // 4- Custom Hooks
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // 6- Loading
    const [loading, setLoading] = useState(false);

    // 7- Errors
    const [error, setError] = useState(null);

   const httpConfig = (data, method) => {
    if(method === 'POST') {
        setConfig({
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data),
        });
        setMethod(method);
    }
   }

    useEffect(() => {
        const fetchData = async () => {

            // 6- loading
            setLoading(true);

            try {
                const res = await fetch(url);

                const json = await res.json();
    
                setData(json);
            } catch(error) {
                setError('There was an error loading the data');
            }
            setLoading(false); 

        }
        fetchData();
    }, [url, callFetch])

    // 5- Refactoring Post
    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions);

                const json = await res.json();

                setCallFetch(json);
            }
        }
        httpRequest();
    }, [config, method, url])

    return { data, httpConfig, loading, error }
}