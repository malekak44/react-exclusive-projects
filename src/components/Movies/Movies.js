import React from 'react';
import './Movies.scss';

const Movies = () => {
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