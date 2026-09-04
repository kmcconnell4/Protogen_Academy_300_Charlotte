import './App.css'
import BirthScene from './scenes/BirthScene'
import BooksScene from './scenes/BooksScene'
import CloserScene from './scenes/CloserScene'
import DiaperScene from './scenes/DiaperScene'
import OutingsScene from './scenes/OutingsScene'
import SleepScene from './scenes/SleepScene'
import StarSignScene from './scenes/StarSignScene'

function App() {
  return (
    <main>
      <BirthScene />
      <StarSignScene />
      <DiaperScene />
      <SleepScene />
      <BooksScene />
      <OutingsScene />
      <CloserScene />
    </main>
  )
}

export default App
