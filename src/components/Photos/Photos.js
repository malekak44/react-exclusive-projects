import React, { useEffect, useState } from 'react';
import './Photos.scss';
import { FaSearch } from 'react-icons/fa';
import Photo from './Photo';
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainURL = `https://api.unsplash.com/photos/`;
const searchURL = `https://api.unsplash.com/search/photos/`;

const Photos = () => {
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);

    const fetchImages = async () => {
        setLoading(true);
        let url;
        const urlPage = `&page=${page}`;
        const urlQuery = `&query=${query}`;

        if (query) {
            url = `${searchURL}${clientID}${urlPage}${urlQuery}`;
        } else {
            url = `${mainURL}${clientID}${urlPage}`;
        }

        try {
            const response = await fetch(url);
            const data = await response.json();
            setPhotos((oldPhotos) => {
                if (query && page === 1) {
                    return data.results;
                } else if (query) {
                    return [...oldPhotos, ...data.results];
                } else {
                    return [...oldPhotos, ...data];
                }
            });
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchImages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        const event = window.addEventListener("scroll", () => {
            if ((!loading && window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2) {
                setPage((oldPage) => {
                    return oldPage + 1;
                });
            }
        });
        return () => {
            window.removeEventListener("scroll", event);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setPage(1);
        fetchImages();
    }

    return (
        <main id="photos">
            <section className='search'>
                <form className='search-form'>
                    <input
                        type='text'
                        placeholder='search'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className='form-input'
                    />
                    <button type='submit' className='submit-btn' onClick={handleSubmit}>
                        <FaSearch />
                    </button>
                </form>
            </section>
            <section className='photos'>
                <div className='photos-center'>
                    {photos.map((image, index) => {
                        return <Photo key={index} {...image} />;
                    })}
                </div>
                {loading && <h1 className='loading'>Loading...</h1>}
            </section>
        </main>
    );
};

export default Photos;