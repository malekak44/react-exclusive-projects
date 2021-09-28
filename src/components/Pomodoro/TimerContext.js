import React, { createContext, useContext, useReducer } from 'react';
import { DECREASE_VALUE, INCREASE_VALUE, PLAY_PAUSE, RESET_ALL, START_TIMER, TOGGLE_TIMER_LABEL } from './actions';
import reducer from './reducer';

const TimerContext = createContext();

const initialState = {
    breakValue: 5,
    sessionValue: 25,
    isPaused: true,
    timerLabel: 'Session',
    timerValue: 1500,
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

    const startTimer = (value) => {
        return dispatch({ type: START_TIMER, payload: value });
    }

    const toggleTimerLabel = (value) => {
        return dispatch({ type: TOGGLE_TIMER_LABEL, payload: value });
    }

    const resetAll = () => {
        return dispatch({ type: RESET_ALL });
    }

    return (
        <TimerContext.Provider
            value={{
                ...state,
                state,
                increaseValue,
                decreaseValue,
                playPause,
                startTimer,
                toggleTimerLabel,
                resetAll,
            }}>
            {children}
        </TimerContext.Provider>
    )
}

export const useTimerContext = () => {
    return useContext(TimerContext);
}

export { initialState, TimerContext, TimerProvider };