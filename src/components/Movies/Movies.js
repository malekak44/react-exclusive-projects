import React, { useEffect, useState } from 'react';
import './Movies.scss';
import SingleMovie from './SingleMovie';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('batman');
    const [loading, setLoading] = useState(false);

    const url = `https://imdb-api.com/en/API/SearchTitle/${process.env.REACT_APP_MOVIE_KEY}/${query}`;

    const fetchMovies = async () => {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
    }

    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchMovies();
    }

    return (
        <main id="movies">
            <h1>Search Movies</h1>
            <form onSubmit={handleSubmit} id="search-form">
                <input id="search" type="search" autoComplete="off" value={query}
                    onChange={(e) => setQuery(e.target.value)} />
            </form>
            {loading ? <div className="loading"></div> :
                movies.length === 0 ? <h1>Nothing Found</h1>
                    : <div className="container">{movies.map(mov => <SingleMovie key={mov.id} {...mov} />)}</div>
            }
        </main>
    );
};

export default Movies;