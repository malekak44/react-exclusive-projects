import React from 'react';
import { AppProvider } from './context';
import Wrapper from './Wrapper';

const Quiz = () => {
    return (
        <AppProvider>
            <Wrapper />
        </AppProvider>
    );
};

export default Quiz;