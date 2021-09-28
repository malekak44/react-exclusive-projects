import React from "react";
import projects from './data';
import { Link } from 'react-router-dom';
import './Home.scss';
import girl from './images/girl.jpg';
import reactjs from './images/reactjs.jpg';

export default function Home() {
    return (
        <>
            <header className="home-header">
                <div className="header-content">
                    <div className="text">
                    <img src={reactjs} alt="react" />
                        <h1>React Exclusive Projects</h1>
                        <p>These are some of the exclusive projects of React that I have practiced. Without creating projects you cannot learn any technology. These projects cover the intermediate level of ReactJS. And some of my FreeCodeCamp projects are also here. So explore the projects!</p>
                        <a href="https://github.com/malekak44">
                            <button className="main-btn">My Github</button>
                        </a>
                    </div>
                    <img src={girl} alt="girl" />
                </div>
            </header>
            <div className="home-title">
                <h2>Exclusive Projects</h2>
                <div className="home-underline"></div>
            </div>
            <main id="home">
                <section id="projects">
                    {projects.map(project => <Link to={`/${project.title}`} key={project.id}>
                        <article className="project">
                            <div className="project-img-div">
                                <img src={project.image} className="project-img" alt={project.title} />
                            </div>
                            <footer className="project-footer">
                                <h5>{project.title}</h5>
                            </footer>
                        </article>
                    </Link>)}
                </section>
            </main>
            <footer className="home-footer">
                <p>&copy;Copyright 2021 | All rights reserved</p>
            </footer>
        </>
    );
}