export const getGenres = () => {
    return {
        type: 'GET_GENRES'
    }
};
export const setGenres = () => {
    return {
        type: 'SET_GENRES'
    }
};

export const filterMovies = () => {
    return {
        type: 'FILTER'
    };
};

export const getMovie = (title) => {
    return {
        type: 'GET',
        title
    };
};

export const initializeData = () => {
    return {
        type: 'INITIALIZE'
    }
}