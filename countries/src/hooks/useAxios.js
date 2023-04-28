import axios from 'axios'
import { useEffect, useState } from 'react'

const api = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
})

const useAxios = (name, region) => {
    const [allCntrs, setAllCntrs] = useState();
    const [cntry, setCntry] = useState();
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setErr();

            try {
                if (name) {
                    const response = await api.get(`/name/${name}`);
                    setCntry(response?.data);
                } else if (region) {
                    const response = await api.get(`/region/${region}`);
                    setAllCntrs(response?.data);
                } else {
                    const response = await api.get('/all');
                    setAllCntrs(response?.data);
                }
            } catch (error) {
                setErr(error);
                console.log('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [name, region]);

    return { loading, allCntrs, cntry, err };
};


export default useAxios
