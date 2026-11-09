import './Header.css'

function Header() {
  return (
    <header className="marquee">
      <div className="marquee__bar">
        <span>Cine de barrio</span>
        <span>Funciones de hoy</span>
      </div>
      <h1 className="marquee__title" data-text="CineSeat">
        CineSeat
      </h1>
      <p className="marquee__tagline">
        Escogé la película, después la butaca.{' '}
        <span>Las palomitas corren por tu cuenta.</span>
      </p>
    </header>
  )
}

export default Header
