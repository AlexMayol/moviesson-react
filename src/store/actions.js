export const getMovie = (title) => {
    return {
        type: "GET",
        title,
    };
};

export const initializeData = () => {
    return {
        type: "INITIALIZE",
    };
};
