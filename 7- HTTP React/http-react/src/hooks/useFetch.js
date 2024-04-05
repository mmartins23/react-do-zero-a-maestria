import { useState, useEffect } from 'react';

// 4- Custom Hooks
export const useFetch = (url) => {
    const [data, setData] = useState("");

    // 5- Refactoring Post

    // 4- Custom Hooks
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // 6- Loading State
    const [loading, setLoading] = useState(false);

    // 7- Dealing with errors
    const [error, setError] = useState(null);

    // 8- challenge 
    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method) => {
        if (method === 'POST') {
            setConfig({
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            });
            setMethod("POST");
        } else if (method === 'DELETE') {
            setConfig({
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            setMethod("DELETE");
            setItemId(data);
        }
    }

    useEffect(() => {
        const fetchData = async () => {

            // 6- loading state
            setLoading(true);

            try {
                const res = await fetch(url);
                const json = await res.json();

                setData(json);
                setMethod(null);

             // 8 - tratando erros
             setError(null);
            } catch (error) {
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
                setLoading(true);

                let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions);

                const json = await res.json();

                setCallFetch(json);
                // 9-Challenge
            } else if(method === "DELETE") {
                const deleteUrl = `${url}/${itemId}`;

                const res = await fetch(deleteUrl, config);

                const json = await res.json();
                
                setCallFetch(json);
            }
        }
        httpRequest();
    }, [config, method, url, itemId])

    return { data, httpConfig, loading, error }
}