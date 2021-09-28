import React from 'react';
import { useParams } from 'react-router';
import Error from './Error';
import projects from './Home/data';

const Project = () => {
    const { project } = useParams();
    try {
        const single = projects.filter(pr => pr.title === project);
        const Component = single[0].component;
        return <Component />;
    } catch (error) {
        return <Error />;
    }
};

export default Project;