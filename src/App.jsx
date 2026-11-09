import Header from './components/Header'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="layout">
        <section>
          <h2 className="section-label">Cartelera</h2>
        </section>
        <section>
          <h2 className="section-label">Sala</h2>
        </section>
      </main>
    </div>
  )
}

export default App