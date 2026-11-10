import { useEffect, useState } from 'react'

// Igual que useState, pero el valor se guarda en el navegador
// y sigue ahí aunque recargués la página.
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key)
      return saved !== null ? JSON.parse(saved) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Si el navegador no permite guardar, la app sigue funcionando igual
    }
  }, [key, value])

  return [value, setValue]
}
