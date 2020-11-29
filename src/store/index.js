import { createStore } from 'redux';

import { MoviesData } from '../data/movies'




// Reducers
const MovieData = (state = { movies: [...MoviesData] }, action) => {
    switch (action.type) {
        case 'INITIALIZE':
            return { ...state };
        case 'GET':
            console.log('state', state)
            console.log('action', action)
            return {
                movies: state.movies,
                current_movie: state.movies.find(movs => movs.key === action.title)
            }
        default:
            break;
    }
};

let store = createStore(MovieData,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(() => console.log(store.getState()))

export { store };