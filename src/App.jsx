import { useState } from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import SeatMap from './components/SeatMap'
import Summary from './components/Summary'
import { movies } from './data/movies'
import { useLocalStorage } from './hooks/useLocalStorage'

const MAX_SEATS = 8

function App() {
  const [selectedMovieId, setSelectedMovieId] = useState(movies[0].id)
  const [selectedSeats, setSelectedSeats] = useState([])
  const [lastBooking, setLastBooking] = useState(null)
  // { luciernaga: ['A1', 'A2'], ruta32: ['C4'] }
  const [reservations, setReservations] = useLocalStorage('cineseat:reservations', {})

  const movie = movies.find((m) => m.id === selectedMovieId)
  const reservedSeats = reservations[movie.id] ?? []

  function handleSelectMovie(movieId) {
    setSelectedMovieId(movieId)
    setSelectedSeats([]) // al cambiar de película se limpia la selección
    setLastBooking(null)
  }

  function handleToggleSeat(seatId) {
    setLastBooking(null)
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId))
    } else if (selectedSeats.length < MAX_SEATS) {
      setSelectedSeats([...selectedSeats, seatId])
    }
  }

  function handleConfirm() {
    setReservations({
      ...reservations,
      [movie.id]: [...reservedSeats, ...selectedSeats],
    })
    setLastBooking({ title: movie.title, seats: selectedSeats })
    setSelectedSeats([])
  }

  function handleReset() {
    const { [movie.id]: _removed, ...rest } = reservations
    setReservations(rest)
    setLastBooking(null)
  }

  return (
    <div className="app">
      <Header />
      <main className="layout">
        <section>
          <h2 className="section-label">Cartelera</h2>
          <MovieList
            movies={movies}
            selectedId={selectedMovieId}
            onSelect={handleSelectMovie}
          />
        </section>
        <section>
          <h2 className="section-label">Sala · {movie.title}</h2>
          <SeatMap
            occupied={movie.occupied}
            reserved={reservedSeats}
            selected={selectedSeats}
            onToggle={handleToggleSeat}
          />
          <Summary
            movie={movie}
            seats={selectedSeats}
            lastBooking={lastBooking}
            hasReservations={reservedSeats.length > 0}
            onConfirm={handleConfirm}
            onReset={handleReset}
          />
        </section>
      </main>
    </div>
  )
}

export default App
