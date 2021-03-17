import axios from 'axios';
import { useEffect, useState} from 'react';

const useAxios = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                if(!res.status === "ok" ) {
                    throw error('could not fetch data for that reason');
                }
                setData(res.data.articles);
                setLoading(false);
                setError(null);
            })
            .catch(e => {
                setLoading(false);
                setError(e.message);
                console.log(e);
            })
    }, []);

    return { data, setData, loading, error}
}
 
export default useAxios;