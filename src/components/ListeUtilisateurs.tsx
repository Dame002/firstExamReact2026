import { useState, useEffect } from 'react'


interface User {
  id: number
  name: string
  email: string
}


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
  }, [])

  return (
    <div className="card">
      <h2>Question 3 — useEffect + API</h2>

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
