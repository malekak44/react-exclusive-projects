import React, { useEffect } from 'react';
import './Movies.scss';

const Movies = () => {
    const url = "http://www.omdbapi.com/?apikey=a7c03c94&s=batman";

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <main id="movies">
            <h1>Search Movies</h1>
            <div id="search-input">
                <input id="search" type="search" autoComplete="off" />
            </div>
            <div className="container">

            </div>
        </main>
    );
};

export default Movies;