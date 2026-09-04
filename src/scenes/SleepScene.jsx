import BigNumber from '../components/BigNumber'
import Scene from '../components/Scene'
import { storyStats } from '../data/storyData'

function SleepScene() {
  return (
    <Scene id="sleep" labelledBy="sleep-title" tone="green">
      <div className="scene-copy">
        <p className="scene-copy__label">The parent perspective</p>
        <h2 id="sleep-title">The sleep you did not get.</h2>
        <BigNumber {...storyStats.sleep} />
        <p className="scene-copy__body">That is 50 full days of getting up anyway.</p>
      </div>
      <div className="moon" role="img" aria-label="A hand-drawn crescent moon">
        <span></span>
      </div>
    </Scene>
  )
}

export default SleepScene