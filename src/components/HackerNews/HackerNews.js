import React from 'react';
import Buttons from './Buttons';
import { AppProvider } from './context';
import './HackerNews.scss';
import Search from './Search';
import Stories from './Stories';

const HackerNews = () => {
    return (
        <main id="hacker-news">
            <AppProvider>
                <Search />
                <Buttons />
                <Stories />
            </AppProvider>
        </main>
    );
};

export default HackerNews;