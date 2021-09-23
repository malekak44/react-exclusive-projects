import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { HANDLE_PAGE, HANDLE_SEARCH, REMOVE_STORY, SET_LOADING, SET_STORIES } from './actions';
import reducer from './reducer';

const AppContext = createContext();
const url = "https://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading: true,
    hits: [],
    query: 'react',
    page: 0,
    nbPages: 0,
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchStories = async (url) => {
        dispatch({ type: SET_LOADING });

        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch({ type: SET_STORIES, payload: { hits: data.hits, nbPages: data.nbPages } });
        } catch (error) {
            console.log(error);
        }
    }

    const removeStory = (id) => {
        dispatch({ type: REMOVE_STORY, payload: id });
    }

    const handlePage = (value) => {
        dispatch({ type: HANDLE_PAGE, payload: value });
    }

    const handleSearch = (query) => {
        dispatch({ type: HANDLE_SEARCH, payload: query });
    }

    useEffect(() => {
        fetchStories(`${url}query=${state.query}&page=${state.page}`);
    }, [state.page, state.query]);

    return (
        <AppContext.Provider value={{ removeStory, handlePage, handleSearch, ...state }}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };