import React, { useEffect } from 'react';

const useUserData = () => {

    const [ isLoading, setIsLoading ] = React.useState(false);
    const [ error, setError ] = React.useState(false);
    const [ data, setData ] = React.useState([]);
    const controller = new AbortController();

    const url = `https://jsonplaceholder.typicode.com/users`;

    const getUsers = async () => {
        setIsLoading(true);
        try{
            const res = await fetch(url, { signal: controller.signal });
            const data = await res.json();
            setIsLoading(false);
            console.log(data);
            setData(data);
        }
        catch(error){
            console.log(error);
            setError(true);
        }
    }

    useEffect(() => {
        getUsers();

        return () => {
            controller.abort();
        }
    }, []);

    return { isLoading, error, data };
};

export default useUserData;