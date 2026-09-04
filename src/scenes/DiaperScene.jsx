import BigNumber from '../components/BigNumber'
import Scene from '../components/Scene'
import { storyStats } from '../data/storyData'

function DiaperScene() {
  return (
    <Scene id="diapers" labelledBy="diapers-title" tone="yellow">
      <div className="scene-copy">
        <p className="scene-copy__label">Diaper City</p>
        <h2 id="diapers-title">The supplies. The laundry. The diapers.</h2>
        <BigNumber {...storyStats.diapers} />
        <p className="scene-copy__body">One diaper roughly every 3 hours, nonstop, for 2.5 years.</p>
        <div className="chart-frame" aria-label="Daily diaper count tapering to zero as this section enters view">
          <span className="chart-frame__top">Diaper City</span>
          <svg viewBox="0 0 520 190" aria-hidden="true">
            <path className="chart-frame__axis" d="M28 20V166H495" />
            <path className="chart-frame__line" pathLength="1" d="M30 38C94 36 104 53 145 62S205 81 244 94S321 115 356 127S421 145 489 158" />
            <path className="chart-frame__flag" d="M490 159v-52m0 2h-44l14 16-14 16h44" />
          </svg>
          <span className="chart-frame__bottom">officially potty trained</span>
        </div>
      </div>
    </Scene>
  )
}

export default DiaperScene