import { createStore } from "redux";

import { MoviesData } from "../data/movies";

const initialState = [...MoviesData];

// Reducers
const MovieReducer = (state = { movies: initialState, filters: { name: "", genre: "" } }, action) => {
    switch (action.type) {
        case "INITIALIZE":
            return { ...state };
        case "GET":
            return {
                movies: state.movies,
                current_movie: state.movies.find((movs) => movs.key === action.title),
            };
        default:
            return { ...state };
    }
};

let store = createStore(MovieReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export { store };
