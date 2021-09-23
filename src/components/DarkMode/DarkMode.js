import React, { useEffect, useState } from 'react';
import './DarkMode.scss';
import { FaMoon, FaSun } from 'react-icons/fa';
import coder from './coder.png';
const getLocalStorage = () => {
    const theme = localStorage.getItem("darkTheme");
    if (theme) {
        return theme;
    } else {
        return false;
    }
}

const DarkMode = () => {
    const [darkTheme, setDarkTheme] = useState(getLocalStorage());

    if (darkTheme) {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
    } else {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
    }

    useEffect(() => {
        localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
    }, [darkTheme]);

    return (
        <main id="theme">
            <div className="header">
                <h1>Theme Changer</h1>
                <button className="icon" onClick={() => setDarkTheme(!darkTheme)}>{darkTheme ? <FaSun /> : <FaMoon />}</button>
            </div>
            <section id="intro">
                <img src={coder} alt="coder" />
            </section>
        </main>
    );
};

export default DarkMode;