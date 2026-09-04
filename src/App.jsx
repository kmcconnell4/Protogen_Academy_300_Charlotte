import './App.css'
import SiteHeader from './components/SiteHeader'
import BirthScene from './scenes/BirthScene'
import BooksScene from './scenes/BooksScene'
import CloserScene from './scenes/CloserScene'
import DiaperScene from './scenes/DiaperScene'
import OutingsScene from './scenes/OutingsScene'

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <BirthScene />
        <DiaperScene />
        <BooksScene />
        <OutingsScene />
        <CloserScene />
      </main>
    </>
  )
}

export default App
