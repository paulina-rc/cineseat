function Seat({ id, status, onToggle }) {
  const labels = {
    free: 'libre',
    selected: 'seleccionada',
    occupied: 'ocupada',
  }

  return (
    <button
      type="button"
      className={`seat seat--${status}`}
      onClick={() => onToggle(id)}
      disabled={status === 'occupied'}
      aria-label={`Butaca ${id}, ${labels[status]}`}
      title={id}
    >
      {id.slice(1)}
    </button>
  )
}

export default Seat
