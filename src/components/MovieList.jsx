import { formatPrice } from '../data/movies'
import './MovieList.css'

function MovieList({ movies, selectedId, onSelect }) {
  return (
    <ul className="movie-list">
      {movies.map((movie, index) => {
        const isActive = movie.id === selectedId

        return (
          <li key={movie.id} style={{ '--i': index }}>
            <button
              type="button"
              className={`movie-card ${isActive ? 'movie-card--active' : ''}`}
              onClick={() => onSelect(movie.id)}
              aria-pressed={isActive}
            >
              <span className="movie-card__time">{movie.showtime}</span>
              <span className="movie-card__info">
                <span className="movie-card__title">{movie.title}</span>
                <span className="movie-card__meta">
                  {movie.genre} · {movie.duration} min · {formatPrice(movie.price)}
                </span>
              </span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default MovieList
