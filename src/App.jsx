import { useState } from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import { movies } from './data/movies'

function App() {
  const [selectedMovieId, setSelectedMovieId] = useState(movies[0].id)

  return (
    <div className="app">
      <Header />
      <main className="layout">
        <section>
          <h2 className="section-label">Cartelera</h2>
          <MovieList
            movies={movies}
            selectedId={selectedMovieId}
            onSelect={setSelectedMovieId}
          />
        </section>
        <section>
          <h2 className="section-label">Sala</h2>
        </section>
      </main>
    </div>
  )
}

export default App