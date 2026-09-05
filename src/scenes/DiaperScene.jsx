import BarChart from '../components/BarChart'
import BigNumber from '../components/BigNumber'
import Polaroid from '../components/Polaroid'
import Scene from '../components/Scene'
import { diaperRateByPeriod, storyStats } from '../data/storyData'

function DiaperScene() {
  return (
    <Scene id="diapers" labelledBy="diapers-title" tone="green">
      <div className="scene-copy">
        <p className="scene-copy__label">Phase 03: Welcome to Diaper City</p>
        <h2 id="diapers-title">
          The supplies.
          <br />
          The laundry.
          <br />
          The diapers.
        </h2>
        <BigNumber variant="inline" accent="var(--crayon-red)" value={storyStats.diapers.value} label="diapers changed." />
        <p className="scene-copy__body">One roughly every 3 hours. Nonstop. Night and day. For 2.5 long years.</p>
        <BarChart
          data={diaperRateByPeriod}
          ariaLabel="Daily diaper rate over time, tapering from 10 a day to 0 as she got potty trained"
        />
      </div>
      <div className="scene-visual">
        <Polaroid
          rotate={2}
          caption="diaper duty, caught on camera"
          src="/photos/DIAPERDUTY_Diaper_Baby.MOV"
          video
        />
      </div>
    </Scene>
  )
}

export default DiaperScene
