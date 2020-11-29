const MovieCard = ({ id, name, img, description, genres }) => (
    <div className="movie">
        <img src={"assets/images/movie-covers/" + img} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        <ul>
            {genres.forEach((genre) => (
                <li className="uppercase">{genre}</li>
            ))}

        </ul>
    </div>
);

export { MovieCard };