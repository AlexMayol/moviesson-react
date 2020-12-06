import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { MoviesData } from "../data/movies";
import { MovieCard } from "./MovieCard";

// helpers
import { capitalize } from "../helpers/functions";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);

    const [selectedGenre, setSelectedGenre] = useState("all");

    const filterByGenre = (e) => {
        setSelectedGenre(e.target.value);
    };

    const [searchValue, setSearchValue] = useState("");
    const FilterByTitle = (e) => {
        setSearchValue(e.target.value)

    };

    useEffect(() => {
        const genresAux = new Set();
        MoviesData.forEach((movie) => {
            movie.genres.forEach((genre) => genresAux.add(genre));
        });
        setGenres([...genresAux]);

        const getFilteredMovies = () => {
            if (searchValue === '' && selectedGenre === 'all') return MoviesData;

            let res = [];
            for (let movie of MoviesData) {
                if (movie.name.toLowerCase().includes(searchValue) &&
                    (movie.genres.includes(selectedGenre) || selectedGenre === 'all')
                )
                    res.push(movie)
            }
            return res;
        }

        setMovies(getFilteredMovies())
    }, [searchValue, selectedGenre]);



    return (
        <div>
            <header>
                <form>
                    <input value={searchValue} onChange={FilterByTitle} placeholder="Search for a movie" />
                </form>

                <div>
                    <select onChange={filterByGenre}>
                        <option defaultValue value="all">All genres</option>
                        {genres.map((genre) => (
                            <option key={genre} value={genre}>{capitalize(genre)}</option>
                        ))}
                    </select>
                </div>
            </header>

            <section className="grid gap-4 m-8 md:grid-cols-2 lg:grid-cols-3">
                {movies.map((movie) => (
                    <Link to={"/movie/" + movie.key} key={movie.key}>
                        <MovieCard {...movie} key={movie.id + "_" + movie.name} />
                    </Link>
                ))}
            </section>
        </div>
    );
};

export { MovieList };
