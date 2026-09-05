import { useState } from 'react'
import Polaroid from '../components/Polaroid'
import Scene from '../components/Scene'
import StarChartModal from '../components/StarChartModal'
import { birthDetails, getDaysSinceBirth } from '../data/storyData'

function BirthScene() {
  const [isChartOpen, setIsChartOpen] = useState(false)

  return (
    <Scene id="born" labelledBy="born-title" tone="paper">
      <div className="scene-copy">
        <h1 id="born-title">{getDaysSinceBirth()} days ago, you were born.</h1>
        <p className="scene-copy__body">
          Life went from &ldquo;quiet &amp; organized&rdquo; to absolute chaotic magic.
        </p>
        <div className="stat-pill card card--shadow">
          <div className="stat-pill__segment stat-pill__segment--date">
            <span className="stat-pill__label">Date of arrival</span>
            <span className="stat-pill__value">
              {birthDetails.date}
              <button
                type="button"
                className="pisces-trigger"
                onClick={() => setIsChartOpen(true)}
                aria-haspopup="dialog"
              >
                <span aria-hidden="true">♓</span>
                <span className="sr-only">Open her full star chart</span>
              </button>
            </span>
          </div>
          <div className="stat-pill__segment">
            <span className="stat-pill__label">Weight</span>
            <span className="stat-pill__value">{birthDetails.weight}</span>
          </div>
          <div className="stat-pill__segment">
            <span className="stat-pill__label">Length</span>
            <span className="stat-pill__value">{birthDetails.length}</span>
          </div>
        </div>
      </div>
      <div className="scene-visual">
        <div className="photo-stack">
          <Polaroid
            rotate={-3}
            caption="candid snapshot :)"
            src="/photos/BIRTH1_newborn1.JPG"
            alt="Newborn Charlotte asleep in a white bow headband"
          />
          <Polaroid
            rotate={2}
            caption="watch me go! 🛝"
            className="polaroid--offset-right"
            src="/photos/Birth2_Slide.PNG"
            alt="Charlotte grinning on a playground slide"
          />
        </div>
      </div>
      <StarChartModal isOpen={isChartOpen} onClose={() => setIsChartOpen(false)} />
    </Scene>
  )
}

export default BirthScene
