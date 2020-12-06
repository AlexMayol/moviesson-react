import React from "react";
import { useSelector } from "react-redux";
import { store } from "../store";
import { getMovie } from "../store/actions";

import {capitalize} from '../helpers/functions';

const MovieDetails = ({ match }) => {
  store.dispatch(getMovie(match.params.slug));

  const movie = useSelector((state) => state.current_movie);

  return (
    <section className="MovieDetails">
        <h1 className="MovieDetails-Title">{movie.name}</h1>
      <img className="MovieDetails-Image" src={`/assets/images/movie-covers/${movie.img}`} alt={movie.name} />
      <div className="MovieDetails-Genres">
          {movie.genres.map( (gen)=>(
              <span  key={gen}>{capitalize(gen)}</span>

          ))}
      </div>
      <p className="MovieDetails-Description">{movie.description}</p>
      <p className="MovieDetails-rate">{movie.rate}</p>
      <p className="MovieDetails-Length">{movie.length}</p>

      <button className="MovieDetails-PlayBtn">Play</button>
    </section>
  );
};
export { MovieDetails };
