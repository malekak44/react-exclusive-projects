import { useEffect, useState } from 'react';
import paginate from './paginate';
const url = "https://api.github.com/users/torvalds/followers?per_page=100";

const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getFollowers = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(paginate(data));
        setLoading(false);
    }

    useEffect(() => {
        getFollowers();
    }, []);

    return { loading, data };
};

export default useFetch;