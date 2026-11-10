import Seat from './Seat'
import { ROWS, SEATS_PER_ROW, AISLE_AFTER } from '../data/movies'
import './SeatMap.css'

function SeatMap({ occupied, selected, onToggle }) {
  function getStatus(seatId) {
    if (occupied.includes(seatId)) return 'occupied'
    if (selected.includes(seatId)) return 'selected'
    return 'free'
  }

  // [1, 2, 3, ..., 10]
  const seatNumbers = Array.from({ length: SEATS_PER_ROW }, (_, i) => i + 1)

  return (
    <div className="seat-map">
      <div className="seat-map__screen">Pantalla</div>

      <div className="seat-map__rows">
        {ROWS.map((row) => (
          <div className="seat-map__row" key={row}>
            <span className="seat-map__row-label">{row}</span>
            {seatNumbers.map((number) => {
              const seatId = `${row}${number}`
              return (
                <div
                  key={seatId}
                  className={number === AISLE_AFTER ? 'seat-map__cell seat-map__cell--aisle' : 'seat-map__cell'}
                >
                  <Seat id={seatId} status={getStatus(seatId)} onToggle={onToggle} />
                </div>
              )
            })}
            <span className="seat-map__row-label">{row}</span>
          </div>
        ))}
      </div>

      <ul className="seat-map__legend">
        <li><span className="dot dot--free" /> Libre</li>
        <li><span className="dot dot--selected" /> Tu selección</li>
        <li><span className="dot dot--occupied" /> Ocupada</li>
      </ul>
    </div>
  )
}

export default SeatMap