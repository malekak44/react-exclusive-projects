import { DECREASE_VALUE, INCREASE_VALUE, PLAY_PAUSE, RESET_ALL, START_TIMER, TOGGLE_TIMER_LABEL } from "./actions";
import { initialState } from "./TimerContext";

const reducer = (state, action) => {
    switch (action.type) {
        case INCREASE_VALUE:
            if (action.payload === "break" && state.isPaused) {
                return { ...state, breakValue: state.breakValue + 1 };
            }
            if (action.payload === "session" && state.isPaused) {
                return {
                    ...state, sessionValue: state.sessionValue + 1,
                    timerValue: (state.sessionValue + 1) * 60
                };
            }
            return { ...state };
        case DECREASE_VALUE:
            if (action.payload === "break" && state.isPaused) {
                if (state.breakValue > 1) {
                    return { ...state, breakValue: state.breakValue - 1 };
                } else {
                    return { ...state, breakValue: 1 };
                }
            }
            if (action.payload === "session" && state.isPaused) {
                if (state.sessionValue > 1) {
                    return {
                        ...state, sessionValue: state.sessionValue - 1,
                        timerValue: (state.sessionValue - 1) * 60
                    };
                } else {
                    return { ...state, sessionValue: 1 };
                }
            }
            return { ...state };
        case PLAY_PAUSE:
            return { ...state, isPaused: !state.isPaused };
        case START_TIMER:
            return { ...state, timerValue: action.payload };
        case TOGGLE_TIMER_LABEL:
            return { ...state, timerLabel: action.payload };
        case RESET_ALL:
            return initialState;
        default:
            return state;
    }
}

export default reducer;