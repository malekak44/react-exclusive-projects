import React, { useEffect, useState } from 'react';
import Article from './Article';
import './DarkMode.scss';
import data from './data';

const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
}

const DarkMode = () => {
    const [theme, setTheme] = useState(getStorageTheme());

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    }

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <main id="dark-mode">
            <nav>
                <div className="nav-center">
                    <h1>Theme Changer</h1>
                    <button className="btn" onClick={toggleTheme}>
                        toggle
                    </button>
                </div>
            </nav>
            <section className="articles">
                {data.map((item) => {
                    return <Article key={item.id} {...item} />;
                })}
            </section>
        </main>
    );
};

export default DarkMode;