import Compteur from './components/Compteur'
import Formulaire from './components/Formulaire'
import ListeUtilisateurs from './components/ListeUtilisateurs'
import RechercheFiltre from './components/RechercheFiltre'

function App() {
  return (
    <div>
      <h1>Epreuve Pratique Examen Technologies JS </h1>

      <div className="container">
        <Compteur />
        <Formulaire />
        <ListeUtilisateurs />
        <RechercheFiltre />
      </div>
    </div>
  )
}

export default App
