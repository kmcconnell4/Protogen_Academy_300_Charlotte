import BigNumber from '../components/BigNumber'
import Scene from '../components/Scene'
import { birthDetails, storyStats } from '../data/storyData'

function BirthScene() {
  return (
    <Scene id="born" labelledBy="born-title" tone="blue">
      <div className="scene-copy scene-copy--birth">
        <p className="scene-copy__date">{birthDetails.born}</p>
        <h1 id="born-title">912 days ago, you were born.</h1>
        <BigNumber {...storyStats.days} />
        <dl className="birth-facts">
          <div>
            <dt>tiny but mighty</dt>
            <dd>{birthDetails.stats}</dd>
          </div>
          <div>
            <dt>star sign</dt>
            <dd>{birthDetails.sign}: dreamy, dramatic, deeply feeling</dd>
          </div>
        </dl>
        <div className="photo-placeholder">[PHOTO PLACEHOLDER: birth]</div>
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

export default BirthScene