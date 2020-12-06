import { useSelector } from "react-redux";
import { store } from "../store";
import { getMovie } from "../store/actions";

import { Link } from "react-router-dom";
import { capitalize } from "../helpers/functions";

const MovieDetails = ({ match }) => {
  store.dispatch(getMovie(match.params.slug));

  const movie = useSelector((state) => state.current_movie);

  return (
    <section>
      <section className="grid grid-cols-4 gap-4 MovieDetails">
        <div className="col-span-4 sm:col-span-2 md:col-span-1">
          <img className="MovieDetails__Image" src={`/assets/images/movie-covers/${movie.img}`} alt={movie.name} />
        </div>
        <div className="col-span-4 sm:col-span-2 md:col-span-3 MovieDetails__Wrapper">
          <h1 className="MovieDetails__Title">{movie.name}</h1>
          <div className="MovieDetails__Genres">
            {movie.genres.map((gen) => (
              <span key={gen} className="MovieDetails__Genres__name">
                {capitalize(gen)}
              </span>
            ))}
          </div>
          <p className="MovieDetails__Description">{movie.description}</p>

          <button className="MovieDetails__PlayBtn">
            Play
            <div>
              <svg className="MovieDetails__PlayBtn__Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142.448 142.448">
                <g>
                  <path d="M142.411 68.9C141.216 31.48 110.968 1.233 73.549.038c-20.361-.646-39.41 7.104-53.488 21.639C6.527 35.65-.584 54.071.038 73.549c1.194 37.419 31.442 67.667 68.861 68.861.779.025 1.551.037 2.325.037 19.454 0 37.624-7.698 51.163-21.676 13.534-13.972 20.646-32.394 20.024-51.871zm-30.798 41.436c-10.688 11.035-25.032 17.112-40.389 17.112-.614 0-1.228-.01-1.847-.029-29.532-.943-53.404-24.815-54.348-54.348-.491-15.382 5.122-29.928 15.806-40.958 10.688-11.035 25.032-17.112 40.389-17.112.614 0 1.228.01 1.847.029 29.532.943 53.404 24.815 54.348 54.348.491 15.382-5.123 29.928-15.806 40.958z" />
                  <path d="M94.585 67.086L63.001 44.44c-3.369-2.416-8.059-.008-8.059 4.138v45.293c0 4.146 4.69 6.554 8.059 4.138l31.583-22.647c2.834-2.031 2.834-6.244.001-8.276z" />
                </g>
              </svg>
            </div>
          </button>

          <div className="flex my-2 space-x-2">
            <div className="MovieDetails__Rate">
              <div>
                <svg className="MovieDetails__Rate__Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 478.2 478.2">
                  <path d="M457.575 325.1c9.8-12.5 14.5-25.9 13.9-39.7-.6-15.2-7.4-27.1-13-34.4 6.5-16.2 9-41.7-12.7-61.5-15.9-14.5-42.9-21-80.3-19.2-26.3 1.2-48.3 6.1-49.2 6.3h-.1c-5 .9-10.3 2-15.7 3.2-.4-6.4.7-22.3 12.5-58.1 14-42.6 13.2-75.2-2.6-97-16.6-22.9-43.1-24.7-50.9-24.7-7.5 0-14.4 3.1-19.3 8.8-11.1 12.9-9.8 36.7-8.4 47.7-13.2 35.4-50.2 122.2-81.5 146.3-.6.4-1.1.9-1.6 1.4-9.2 9.7-15.4 20.2-19.6 29.4-5.9-3.2-12.6-5-19.8-5h-61c-23 0-41.6 18.7-41.6 41.6v162.5c0 23 18.7 41.6 41.6 41.6h61c8.9 0 17.2-2.8 24-7.6l23.5 2.8c3.6.5 67.6 8.6 133.3 7.3 11.9.9 23.1 1.4 33.5 1.4 17.9 0 33.5-1.4 46.5-4.2 30.6-6.5 51.5-19.5 62.1-38.6 8.1-14.6 8.1-29.1 6.8-38.3 19.9-18 23.4-37.9 22.7-51.9-.4-8.1-2.2-15-4.1-20.1zm-409.3 122.2c-8.1 0-14.6-6.6-14.6-14.6V270.1c0-8.1 6.6-14.6 14.6-14.6h61c8.1 0 14.6 6.6 14.6 14.6v162.5c0 8.1-6.6 14.6-14.6 14.6h-61v.1zm383.7-133.9c-4.2 4.4-5 11.1-1.8 16.3 0 .1 4.1 7.1 4.6 16.7.7 13.1-5.6 24.7-18.8 34.6-4.7 3.6-6.6 9.8-4.6 15.4 0 .1 4.3 13.3-2.7 25.8-6.7 12-21.6 20.6-44.2 25.4-18.1 3.9-42.7 4.6-72.9 2.2h-1.4c-64.3 1.4-129.3-7-130-7.1h-.1l-10.1-1.2c.6-2.8.9-5.8.9-8.8V270.1c0-4.3-.7-8.5-1.9-12.4 1.8-6.7 6.8-21.6 18.6-34.3 44.9-35.6 88.8-155.7 90.7-160.9.8-2.1 1-4.4.6-6.7-1.7-11.2-1.1-24.9 1.3-29 5.3.1 19.6 1.6 28.2 13.5 10.2 14.1 9.8 39.3-1.2 72.7-16.8 50.9-18.2 77.7-4.9 89.5 6.6 5.9 15.4 6.2 21.8 3.9 6.1-1.4 11.9-2.6 17.4-3.5.4-.1.9-.2 1.3-.3 30.7-6.7 85.7-10.8 104.8 6.6 16.2 14.8 4.7 34.4 3.4 36.5-3.7 5.6-2.6 12.9 2.4 17.4.1.1 10.6 10 11.1 23.3.4 8.9-3.8 18-12.5 27z" />
                </svg>
              </div>
              {movie.rate}
            </div>

            <p className="MovieDetails__Length">{movie.length}</p>
          </div>
        </div>
      </section>
      <Link to="/" className="BackToHome">
        Browse other movies
      </Link>
    </section>
  );
};
export { MovieDetails };
