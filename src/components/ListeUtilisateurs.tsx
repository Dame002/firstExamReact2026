import { useState, useEffect } from 'react'

// Type minimal pour les utilisateurs de l'API
interface User {
  id: number
  name: string
  email: string
}

// Exercice 3 : useEffect pour récupérer des données depuis une API
// Le tableau vide [] signifie que l'effet ne s'exécute qu'une seule fois
// (au chargement du composant)

export default function ListeUtilisateurs() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
  }, []) // [] = exécution unique au montage

  return (
    <div className="card">
      <h2>Exercice 3 — useEffect + API</h2>

      {loading && <p>Chargement en cours...</p>}

      {!loading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
