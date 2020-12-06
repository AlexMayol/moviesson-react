import { createStore } from 'redux';

import { MoviesData } from '../data/movies'

const initialState = [...MoviesData];

// Reducers
const MovieReducer = (state = { movies: initialState, filters: { name: '', genre: '' } }, action) => {
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
        // case 'FILTER':
        //     console.log(action)
        //     let newMovies = initialState.filter(movie => movie.name.toLowerCase().includes(action.name))
        //     if (newMovies.length === 0)
        //         newMovies = initialState;

        //     return { movies: state.movies, filtered: [...newMovies] };
        // case 'SET_FILTERS':
        //     console.log('action', action)
        //     let newMovies2 = initialState.filter(movie => movie.name.toLowerCase().includes(action.name))

        //     return {
        //         movies: newMovies2,
        //         filters: {
        //             name: action.name || state.filters?.name,
        //             genre: action.genre || state.filters?.genre,
        //         }
        //     }
        default:
            return { ...state };
    }
};

let store = createStore(MovieReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(() => console.log('store', store.getState()))

export { store };