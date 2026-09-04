import BigNumber from '../components/BigNumber'
import Scene from '../components/Scene'
import { storyStats } from '../data/storyData'

function OutingsScene() {
  return (
    <Scene id="outings" labelledBy="outings-title" tone="red">
      <div className="scene-copy">
        <p className="scene-copy__label">Two a month since six months old</p>
        <h2 id="outings-title">48 tiny expeditions.</h2>
        <BigNumber {...storyStats.expeditions} />
        <p className="scene-copy__body">The lion exhibit remains undefeated. Giraffes are a very close second.</p>
        <div className="animal-names" aria-label="Favorite animals: lion and giraffe">
          <span>lion</span>
          <span>giraffe</span>
        </div>
      </div>
      <div className="photo-placeholder">[PHOTO PLACEHOLDER: zoo day]</div>
    </Scene>
  )
}

export default OutingsScene