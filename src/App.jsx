import './App.css'
import BigNumber from './components/BigNumber'
import Scene from './components/Scene'
import { storyStats } from './data/storyData'

function App() {
  return (
    <main>
      <Scene id="foundation" labelledBy="foundation-title" tone="blue">
        <p className="foundation__date">March 8, 2024</p>
        <h1 id="foundation-title">912 Days</h1>
        <BigNumber {...storyStats.days} />
        <p className="foundation__copy">
          A story about the small numbers nobody stops to count.
        </p>
      </Scene>
    </main>
  )
}

export default App
