import React, { useState, useEffect } from 'react';
import './QuoteMachine.scss';
import { FaQuoteLeft, FaTumblr, FaTwitter } from 'react-icons/fa';

const QuoteMachine = () => {
    const [color, setColor] = useState('');
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [twitterLink, setTwitterLink] = useState('');
    const [tumblrLink, setTumblrLink] = useState('');

    const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];
    const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    const getNewQuote = async () => {
        const response = await fetch(url);
        const data = await response.json();
        const randomNum = Math.floor(Math.random() * data.quotes.length);
        const currentQuote = data.quotes[randomNum].quote;
        const currentAuthor = data.quotes[randomNum].author;
        setQuote(currentQuote);
        setAuthor(currentAuthor);
        setColor(colors[Math.floor(Math.random() * colors.length)]);
        setTwitterLink(`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${('"' + currentQuote + '"' + currentAuthor)}`);
        setTumblrLink(`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${'' + currentAuthor + '&content=' + currentQuote + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'}`);
    }

    useEffect(() => {
        getNewQuote();
    }, []);

    return (
        <main className="quote-machine" style={{ backgroundColor: `${color}`, color: `${color}` }}>
            <div id="quote-box">
                <div className="quote-text">
                    <FaQuoteLeft className="icon" /><span>{quote}</span>
                </div>
                <div className="quote-author">- <span>{author}</span></div>
                <div className="buttons">
                    <a
                        href={twitterLink}
                        className="button"
                        id="tweet-quote"
                        title="Tweet this quote!"
                        target="_blank"
                        style={{ backgroundColor: `${color}` }} rel="noreferrer"
                    >
                        <FaTwitter className="icon" />
                    </a>
                    <a
                        href={tumblrLink}
                        className="button"
                        id="tumblr-quote"
                        title="Post this quote on tumblr!"
                        target="_blank"
                        style={{ backgroundColor: `${color}` }} rel="noreferrer"
                    >
                        <FaTumblr className="icon" />
                    </a>
                    <button className="button" id="new-quote"
                        style={{ backgroundColor: `${color}` }}
                        onClick={getNewQuote}>New quote</button>
                </div>
            </div>
        </main>
    );
};

export default QuoteMachine;