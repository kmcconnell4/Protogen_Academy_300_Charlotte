import Polaroid from '../components/Polaroid'
import Scene from '../components/Scene'
import TallyTable from '../components/TallyTable'
import { animalTally, favoriteOutings } from '../data/storyData'

function OutingsScene() {
  return (
    <Scene id="outings" labelledBy="outings-title" tone="blue">
      <div className="scene-copy">
        <p className="scene-copy__label">Phase 03: Adventures galore</p>
        <h2 id="outings-title">48 tiny expeditions.</h2>
        <p className="scene-copy__body">
          Zoo walks, parks, aquarium dates, and puddle splashing — about twice a month since she was six months old,
          with {favoriteOutings.exhibit} as the automatic first stop and feeding the giraffes a close second (about{' '}
          {favoriteOutings.giraffeFeedings} times and counting).
        </p>
        <TallyTable
          title="Favorite animal spotted (lifetime tally)"
          rows={animalTally}
          ariaLabel="Lifetime animal sighting tally"
        />
        <p className="scene-copy__aside">Every single animal we saw was officially named &ldquo;Big Simba&rdquo; or &ldquo;Baby Simba.&rdquo;</p>
      </div>
      <div className="scene-visual">
        <div className="photo-stack">
          <Polaroid rotate={-3} caption="Laughing with the tall crew 🦒">
            [PHOTO PLACEHOLDER: feeding the giraffes 1]
          </Polaroid>
          <Polaroid rotate={2} caption="Charlotte feeding the tall friends 🦒">
            [PHOTO PLACEHOLDER: feeding the giraffes 2]
          </Polaroid>
        </div>
        <p className="scene-copy__aside">Wild adventurer on the loose!</p>
      </div>
    </Scene>
  )
}

export default OutingsScene
