import React from 'react';
import './HackerNews.scss';
import { AppProvider } from './context';
import Buttons from './Buttons';
import SearchForm from './SearchForm';
import Stories from './Stories';

const HackerNews = () => {
    return (
        <main id="hacker-news">
            <AppProvider>
                <SearchForm />
                <Buttons />
                <Stories />
            </AppProvider>
        </main>
    );
};

export default HackerNews;