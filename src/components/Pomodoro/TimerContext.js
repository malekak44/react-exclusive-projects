import React, { createContext, useContext, useReducer } from 'react';
import { DECREASE_VALUE, INCREASE_VALUE, PLAY_PAUSE, RESET_ALL } from './actions';
import reducer from './reducer';

const TimerContext = createContext();

const initialState = {
    breakValue: 5,
    sessionValue: 25,
    isPaused: true,
}

const TimerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const increaseValue = (type) => {
        return dispatch({ type: INCREASE_VALUE, payload: type });
    }

    const decreaseValue = (type) => {
        return dispatch({ type: DECREASE_VALUE, payload: type });
    }

    const playPause = () => {
        return dispatch({ type: PLAY_PAUSE })
    }

    const resetAll = () => {
        return dispatch({ type: RESET_ALL });
    }

    return (
        <TimerContext.Provider
            value={{
                ...state,
                increaseValue,
                decreaseValue,
                playPause,
                resetAll
            }}>
            {children}
        </TimerContext.Provider>
    )
}

export const useTimerContext = () => {
    return useContext(TimerContext);
}

export { TimerProvider };