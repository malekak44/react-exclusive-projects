import { DECREASE_VALUE, INCREASE_VALUE, PLAY_PAUSE, RESET_ALL } from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
        case INCREASE_VALUE:
            if (action.payload === "break" && state.isPaused) {
                return { ...state, breakValue: state.breakValue + 1 };
            }
            if (action.payload === "session" && state.isPaused) {
                return { ...state, sessionValue: state.sessionValue + 1 };
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
                    return { ...state, sessionValue: state.sessionValue - 1 };
                } else {
                    return { ...state, sessionValue: 1 };
                }
            }
            return { ...state };
        case PLAY_PAUSE:
            return { ...state, isPaused: !state.isPaused };
        case RESET_ALL:
            return { ...state, breakValue: 5, sessionValue: 25, isPaused: true };
        default:
            return state;
    }
}

export default reducer;