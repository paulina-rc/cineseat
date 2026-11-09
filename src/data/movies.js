// Filas y asientos por fila de la sala
export const ROWS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
export const SEATS_PER_ROW = 10
// Después de este número hay un pasillo
export const AISLE_AFTER = 5

export const movies = [
  {
    id: 'luciernaga',
    title: 'La última luciérnaga',
    genre: 'Drama',
    duration: 112,
    showtime: '19:30',
    price: 3800,
    occupied: ['C4', 'C5', 'D5', 'D6', 'E5', 'F1', 'F2', 'H9', 'H10'],
  },
  {
    id: 'ruta32',
    title: 'Ruta 32',
    genre: 'Acción',
    duration: 98,
    showtime: '20:15',
    price: 4200,
    occupied: ['A1', 'A2', 'B7', 'B8', 'D3', 'D4', 'E6', 'E7', 'G5', 'G6', 'H3'],
  },
  {
    id: 'neblina',
    title: 'Neblina en el Arenal',
    genre: 'Suspenso',
    duration: 105,
    showtime: '21:00',
    price: 3800,
    occupied: ['B2', 'C8', 'E1', 'E2', 'F6'],
  },
  {
    id: 'codigo',
    title: 'Código volcán',
    genre: 'Ciencia ficción',
    duration: 124,
    showtime: '22:10',
    price: 4500,
    occupied: ['A5', 'A6', 'C3', 'C4', 'C5', 'C6', 'D4', 'D7', 'F8', 'G2', 'H6'],
  },
]

// Convierte 3800 en "₡3800" con el formato de Costa Rica
export function formatPrice(amount) {
  return new Intl.NumberFormat('es-CR', {
    style: 'currency',
    currency: 'CRC',
    maximumFractionDigits: 0,
  }).format(amount)
}
