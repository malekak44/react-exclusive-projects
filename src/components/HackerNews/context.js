import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { SET_LOADING, SET_STORIES, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH } from './actions';
import reducer from './reducer';

const AppContext = createContext();
const mainURL = "https://hn.algolia.com/api/v1/search?";

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

    const handleSearch = (query) => {
        dispatch({ type: HANDLE_SEARCH, payload: query });
    }

    const handlePage = (page) => {
        dispatch({ type: HANDLE_PAGE, payload: page });
    }

    useEffect(() => {
        fetchStories(`${mainURL}query=${state.query}&page=${state.page}`);
    }, [state.page, state.query]);

    return (
        <AppContext.Provider value={{ removeStory, handleSearch, handlePage, ...state }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };