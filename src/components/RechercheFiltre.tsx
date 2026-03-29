import { useState } from 'react'

// Liste de noms de départ
const noms = [
  'Aminata Diallo',
  'Moussa Traoré',
  'Fatou Sow',
  'Ibrahima Fall',
  'Mariama Bah',
  'Ousmane Ndiaye',
  'Aissatou Kouyaté',
  'Cheikh Diop',
  'Rokhaya Mbaye',
  'Alioune Faye',
]

// Exercice 4 : filtre dynamique pendant la saisie
// À chaque changement de l'input, on filtre la liste
// et React affiche uniquement les noms qui correspondent

export default function RechercheFiltre() {
  const [recherche, setRecherche] = useState('')

  const resultats = noms.filter((nom) =>
    nom.toLowerCase().includes(recherche.toLowerCase())
  )

  return (
    <div className="card">
      <h2>Exercice 4 — Recherche dynamique</h2>

      <input
        type="text"
        placeholder="Rechercher un nom..."
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />

      <p style={{ color: '#666', fontSize: '13px', marginBottom: '6px' }}>
        {resultats.length} résultat(s) sur {noms.length}
      </p>

      <ul>
        {resultats.map((nom) => (
          <li key={nom}>{nom}</li>
        ))}
        {resultats.length === 0 && (
          <li style={{ color: '#999' }}>Aucun résultat.</li>
        )}
      </ul>
    </div>
  )
}
