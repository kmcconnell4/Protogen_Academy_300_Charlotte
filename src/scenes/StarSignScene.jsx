import Scene from '../components/Scene'
import { birthDetails } from '../data/storyData'

function StarSignScene() {
  return (
    <Scene id="star-sign" labelledBy="star-sign-title" tone="night">
      <div className="scene-copy">
        <p className="scene-copy__date">{birthDetails.born}</p>
        <h2 id="star-sign-title">Born under {birthDetails.sign}.</h2>
        <p className="scene-copy__body">Dreamy, dramatic, deeply feeling — checks out.</p>
        <dl className="birth-facts">
          <div>
            <dt>tiny but mighty</dt>
            <dd>{birthDetails.stats}</dd>
          </div>
        </dl>
      </div>
      <svg className="constellation" viewBox="0 0 240 150" role="img" aria-label="A hand-drawn Pisces constellation">
        <path d="M22 111L72 44L126 76L178 22L218 95" />
        <circle cx="22" cy="111" r="6" />
        <circle cx="72" cy="44" r="6" />
        <circle cx="126" cy="76" r="6" />
        <circle cx="178" cy="22" r="6" />
        <circle cx="218" cy="95" r="6" />
      </svg>
    </Scene>
  )
}

export default StarSignScene
