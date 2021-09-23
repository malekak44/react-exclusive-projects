import React, { useEffect, useState } from 'react';
import Buttons from './Buttons';
import Follower from './Follower';
import './Pagination.scss';
import useFetch from './useFetch';

const Pagination = () => {
    const { loading, data } = useFetch();
    const [followers, setFollowers] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (loading) return
        setFollowers(data[page]);
    }, [data, loading, page]);

    const nextPage = () => {
        setPage((oldPage) => {
            let nextPage = oldPage + 1;
            if (nextPage > data.length - 1) {
                nextPage = 0;
            }
            return nextPage;
        });
    }

    const prevPage = () => {
        setPage((oldPage) => {
            let prevPage = oldPage - 1;
            if (prevPage < 0) {
                prevPage = data.length - 1;
            }
            return prevPage;
        });
    }

    const handlePage = (index) => {
        setPage(index);
    }

    return (
        <main id="pagination">
            <div className="section-title">
                <h1>{loading ? "Loading..." : "Pagination"}</h1>
            </div>
            <section className="followers">
                <div className="container">
                    {followers.map(follower => <Follower key={follower.id} {...follower} />)}
                </div>
                {!loading && <Buttons prevPage={prevPage} data={data} page={page} handlePage={handlePage} nextPage={nextPage} />}
            </section>
        </main>
    );
};

export default Pagination;