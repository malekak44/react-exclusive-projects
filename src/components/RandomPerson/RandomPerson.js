import React, { useEffect, useState } from 'react';
import './RandomPerson.scss';
import { FaEnvelopeOpen, FaUser, FaPhone, FaLock, FaCalendar, FaMapMarked, } from 'react-icons/fa';

const RandomPerson = () => {
    const [color, setColor] = useState('#16a085');
    const [loading, setLoading] = useState(false);
    const [person, setPerson] = useState([]);
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');

    const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];
    const url = "https://randomuser.me/api/";

    const getRandomPerson = async () => {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        const person = data.results[0];
        const { phone, email } = person;
        const { large: image } = person.picture;
        const { password } = person.login;
        const { first, last } = person.name;
        const {
            dob: { age },
        } = person;
        const {
            street: { number, name },
        } = person.location;

        const newPerson = {
            image, phone, email, password, age, name: `${first} ${last}`, street: `${number} ${name}`
        }
        setPerson(newPerson);
        setLoading(false);
        setTitle('name');
        setValue(newPerson.name);
    }

    const handleValue = (e) => {
        if (e.target.classList.contains("button")) {
            const newValue = e.target.dataset.label;
            setTitle(newValue);
            setValue(person[newValue]);
        }
    }

    useEffect(() => {
        getRandomPerson();
    }, []);

    return (
        <main id="random-person" style={{ backgroundColor: `${color}`, color: `${color}` }}>
            <div id="person-box">
                <div id="person-img">
                    <img style={{ backgroundColor: `${color}` }} src={person.image} alt={person.name} />
                </div>
                <div id="person-info">
                    <p>My {title} is</p>
                    <h2>{value}</h2>
                </div>
                <div className="buttons">
                    <button className="button" data-label="name" onMouseOver={handleValue}>
                        <FaUser />
                    </button>
                    <button className="button" data-label="email" onMouseOver={handleValue}>
                        <FaEnvelopeOpen />
                    </button>
                    <button className="button" data-label="age" onMouseOver={handleValue}>
                        <FaCalendar />
                    </button>
                    <button className="button" data-label="street" onMouseOver={handleValue}>
                        <FaMapMarked />
                    </button>
                    <button className="button" data-label="phone" onMouseOver={handleValue}>
                        <FaPhone />
                    </button>
                    <button className="button" data-label="password" onMouseOver={handleValue}>
                        <FaLock />
                    </button>
                </div>
                <button id="randomBtn" style={{ backgroundColor: `${color}`, border: `2px solid ${color}` }} onClick={() => { getRandomPerson(); setColor(colors[Math.floor(Math.random() * colors.length)]); }}>
                    {loading ? "Loading..." : "Random Person"}
                </button>
            </div>
        </main>
    );
};

export default RandomPerson;