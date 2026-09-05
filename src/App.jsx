import { useEffect } from 'react'
import './App.css'
import SiteHeader from './components/SiteHeader'
import { getDaysSinceBirth } from './data/storyData'
import BirthScene from './scenes/BirthScene'
import BooksScene from './scenes/BooksScene'
import CloserScene from './scenes/CloserScene'
import DiaperScene from './scenes/DiaperScene'
import GrowthScene from './scenes/GrowthScene'
import MilestoneScene from './scenes/MilestoneScene'
import OutingsScene from './scenes/OutingsScene'
import PasswordGate from './components/PasswordGate'

function App() {
  useEffect(() => {
    document.title = `${getDaysSinceBirth()} Days`
  }, [])

  return (
    <PasswordGate>
      <SiteHeader />
      <main>
        <BirthScene />
        <GrowthScene />
        <MilestoneScene />
        <DiaperScene />
        <BooksScene />
        <OutingsScene />
        <CloserScene />
      </main>
    </PasswordGate>
  )
}

export default App
