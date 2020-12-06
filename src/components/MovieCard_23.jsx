import React from "react";

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'w',
            img: `assets/images/movie-covers/american-gangster.jpg`,
            description: 'w',
            genres: ['ssaa', 'sEed']
        };
      }
      render(){
          return (
            <div className="movie">
            <img src={this.state.img} alt={this.state.name} />
            <h3>{this.state.name}</h3>
            <p>{this.state.description}</p>
            <ul>
                {this.state.genres.forEach((genre) => (
                    <li className="uppercase">{genre}</li>
                ))}
    
            </ul>
        </div>
          )
      }
}

export { MovieCard };