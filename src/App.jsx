import { useState } from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import SeatMap from './components/SeatMap'
import { movies } from './data/movies'

const MAX_SEATS = 8

function App() {
  const [selectedMovieId, setSelectedMovieId] = useState(movies[0].id)
  const [selectedSeats, setSelectedSeats] = useState([])

  const movie = movies.find((m) => m.id === selectedMovieId)

  function handleSelectMovie(movieId) {
    setSelectedMovieId(movieId)
    setSelectedSeats([]) // al cambiar de película se limpia la selección
  }

  function handleToggleSeat(seatId) {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId))
    } else if (selectedSeats.length < MAX_SEATS) {
      setSelectedSeats([...selectedSeats, seatId])
    }
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
            selected={selectedSeats}
            onToggle={handleToggleSeat}
          />
        </section>
      </main>
    </div>
  )
}

export default App