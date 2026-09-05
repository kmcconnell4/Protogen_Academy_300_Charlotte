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

function App() {
  useEffect(() => {
    document.title = `${getDaysSinceBirth()} Days`
  }, [])

  return (
    <>
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
    </>
  )
}

export default App
