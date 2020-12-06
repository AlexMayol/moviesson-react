// export const getGenres = () => {
//     return {
//         type: 'GET_GENRES'
//     }
// };
// export const setFilters = ({ name, genre }) => {
//     return {
//         type: 'SET_FILTERS',
//         name,
//         genre
//     }
// };

// export const filterMovies = ({ name = '', genre = null }) => {
//     return {
//         type: 'FILTER',
//         name,
//         genre
//     };
// };

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