import React from 'react';

const SingleMovie = ({ image, title, description }) => {
    return (
        <div className="movie">
            <img src={image} alt={title} />
            <div className="movie-info">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleMovie;