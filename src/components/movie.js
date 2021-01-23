import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Moive.css";

function Moive({ year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: "/movie-detail",
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movies__movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title} </h3>
          <span className="movie__year">{year}</span>
          <ul className="genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 140)}...</p>
        </div>
      </div>
    </Link>
  );
}

Moive.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Moive;
