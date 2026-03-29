import { useState } from 'react'

// Exercice 2 : formulaire avec affichage en temps réel
// À chaque frappe dans l'input, le state se met à jour
// et React re-rend le composant automatiquement

export default function Formulaire() {
  const [nom, setNom] = useState('')

  return (
    <div className="card">
      <h2>Exercice 2 — Formulaire avec affichage temps réel</h2>

      <input
        type="text"
        placeholder="Entrez votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />

      {nom && <p>Bonjour, <strong>{nom}</strong> !</p>}
      {!nom && <p style={{ color: '#999' }}>Commencez à écrire...</p>}
    </div>
  )
}
