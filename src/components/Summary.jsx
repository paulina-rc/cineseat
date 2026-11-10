import { formatPrice } from '../data/movies'
import './Summary.css'

// Ordena "B10", "A2", "B3" como A2, B3, B10
function sortSeats(seats) {
  return [...seats].sort((a, b) => {
    if (a[0] !== b[0]) return a[0].localeCompare(b[0])
    return Number(a.slice(1)) - Number(b.slice(1))
  })
}

function Summary({ movie, seats }) {
  const total = seats.length * movie.price

  return (
    <aside className="summary">
      <p className="summary__kicker">
        Boleto · Admite {seats.length > 0 ? seats.length : '—'}
      </p>
      <div className="summary__head">
        <p className="summary__movie">{movie.title}</p>
        <p className="summary__time">Hoy · {movie.showtime}</p>
      </div>

      {seats.length === 0 ? (
        <p className="summary__empty">Tocá una butaca libre para agregarla.</p>
      ) : (
        <ul className="summary__seats">
          {sortSeats(seats).map((seat) => (
            <li key={seat}>{seat}</li>
          ))}
        </ul>
      )}

      <div className="summary__total">
        <span>
          {seats.length} × {formatPrice(movie.price)}
        </span>
        <strong>{formatPrice(total)}</strong>
      </div>
      <div className="summary__barcode" aria-hidden="true" />
    </aside>
  )
}

export default Summary