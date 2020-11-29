import React from "react";
import { useSelector } from "react-redux";
import { store } from "../store";
import { getMovie } from "../store/actions";

import {capitalize} from '../helpers/functions';

const MovieDetails = ({ match }) => {
  store.dispatch(getMovie(match.params.slug));

  const movie = useSelector((state) => state.current_movie);

  return (
    <section>
        <h1>{movie.name}</h1>
      <img src={`/assets/images/movie-covers/${movie.img}`} alt={movie.name} />
      <div>
          {movie.genres.map( (gen)=>(
              <span>{capitalize(gen)}</span>

          ))}
      </div>
      <p>{movie.description}</p>
      <p>{movie.rate}</p>
      <p>{movie.length}</p>

      <button>Play</button>
    </section>
  );
};
export { MovieDetails };
