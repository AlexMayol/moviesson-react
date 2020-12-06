import React from "react";
import { capitalize } from "../helpers/functions";
class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      img: `assets/images/movie-covers/${props.img}`,
      description: props.description,
      genres: props.genres,
    };
  }
  render() {
    return (
      <div className="MovieCard">
        <div className="MovieCard__Poster">
          <img src={this.state.img} className="MovieCard__Image" alt={this.state.name} />
        </div>
        <div className="MovieCard__Info">
          <h3 className="MovieCard__Name">{this.state.name}</h3>
          <p className="MovieCard__Description">{this.state.description}</p>
          <ul className="MovieCard__Genres">
            {this.state.genres.map((genre) => (
              <li key={genre} className="MovieCard__Genre">
                {capitalize(genre)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export { MovieCard };
