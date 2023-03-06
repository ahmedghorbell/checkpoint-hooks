import ReactStars from "react-stars";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="MovieCard">
      <div id="container">
        <div class="product-details">
          <h1>{movie.title}</h1>
          <ReactStars
            color="black"
            size={29}
            half={false}
            edit={false}
            count={5}
            value={movie.rate}
          />
          <p>Rate: {movie.rate}</p>

          <p class="information">{movie.description}</p>

          <div class="control">
          </div>
        </div>

        <div class="product-image">
          <img src={movie.posterUrl} alt="film" />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
