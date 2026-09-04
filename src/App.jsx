import './App.css'
import BirthScene from './scenes/BirthScene'
import BooksScene from './scenes/BooksScene'
import CloserScene from './scenes/CloserScene'
import DiaperScene from './scenes/DiaperScene'
import OutingsScene from './scenes/OutingsScene'
import SleepScene from './scenes/SleepScene'
import WordsScene from './scenes/WordsScene'

function App() {
  return (
    <main>
      <BirthScene />
      <DiaperScene />
      <SleepScene />
      <BooksScene />
      <OutingsScene />
      <WordsScene />
      <CloserScene />
    </main>
  )
}

export default App
