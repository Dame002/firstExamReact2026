import { useState } from 'react'



export default function Compteur() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <h2>Question 1 — Compteur avec useState</h2>

      <p>Valeur actuelle : <strong>{count}</strong></p>

      <br />

      <button onClick={() => setCount(count + 1)}>
        Augmenter
      </button>
     
      <button
        onClick={() => setCount(0)}
        style={{ backgroundColor: '#ef4444' }}
      >
        Réinitialiser
      </button>
    </div>
  )
}
