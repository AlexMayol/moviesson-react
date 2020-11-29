import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { MoviesData } from '../data/movies';
import { MovieCard } from './MovieCard';

import { useDispatch } from 'react-redux';


import {setGenres} from '../store/actions'
// helpers
import { capitalize } from '../helpers/functions';

const MovieList = () => {

    const dispatch = useDispatch();

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        setMovies(MoviesData);
    }, []);


    // const [genres, setGenres] = useState([]);

    const genresAux = new Set();
    movies.forEach(movie => {
        movie.genres.forEach(genre => genresAux.add(capitalize(genre)))
        // console.log(genresAux)
    })
    const genres = [...genresAux]


    // const [filteredMovies, setFilteredMovies] = useState([]);

    // const handleSubmit = e => {
    //     e.preventDefault();
    // }


    // const [genreValue, setgenreValue] = useState('');
    // const [searchValue, setSearchValue] = useState('');
    // const handleSearch = (e) => {
    //     setSearchValue(e.target.value)
    //     console.log(searchValue)
    //     movies.forEach(movie => {
    //         setFilteredMovies([])
    //         if (movie.name.includes(searchValue)) filteredMovies.push(movie)
    //     })

    // }

    return (


        <div>
            <header>

                <form>

                    <input
                        value=""

                        placeholder="Search for a movie" />
                </form>

                <div>
                    <select  onChange={()=>dispatch(setGenres())}>
                        {genres.map(genre => (
                            <option key={genre}>{genre}</option>
                        ))}
                    </select>
                </div>
            </header>


        <section className="grid gap-4 m-8 md:grid-cols-2 lg:grid-cols-3">

            {movies.map(movie => (
                
                <Link to={'/movie/' + movie.key}>
                    <MovieCard {...movie} key={movie.id + '_' + movie.name} />
                </Link>
            ))}
            </section>


        </div>
    )
}

export { MovieList };