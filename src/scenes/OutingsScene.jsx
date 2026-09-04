import BigNumber from '../components/BigNumber'
import Scene from '../components/Scene'
import { favoriteOutings, storyStats } from '../data/storyData'

function OutingsScene() {
  return (
    <Scene id="outings" labelledBy="outings-title" tone="red">
      <div className="scene-copy">
        <p className="scene-copy__label">The regulars</p>
        <h2 id="outings-title">48 tiny expeditions.</h2>
        <BigNumber {...storyStats.expeditions} />
        <p className="scene-copy__body">
          {favoriteOutings.exhibit} is the automatic first stop. Second place: feeding the giraffes — about {favoriteOutings.giraffeFeedings} times and counting.
        </p>
        <div className="animal-names" aria-label="Favorite animals: lion and giraffe">
          <span>lion</span>
          <span>giraffe</span>
        </div>
      </div>
      <div className="photo-placeholder">[PHOTO PLACEHOLDER: feeding the giraffes]</div>
    </Scene>
  )
}

export default OutingsScene