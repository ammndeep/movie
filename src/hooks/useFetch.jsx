import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("Loading...");
        setData(null);
        setError(null);

        fetchDataFromApi(url)
            .then((resp) => {
                setLoading(false);
                setData(resp);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something Went Wrong");
            });
    }, [url]);

    return{data,loading,error};
};
export default useFetch;


