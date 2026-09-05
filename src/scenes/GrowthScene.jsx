import BigNumber from '../components/BigNumber'
import Card from '../components/Card'
import GrowthChart from '../components/GrowthChart'
import Scene from '../components/Scene'
import ThenNowCard from '../components/ThenNowCard'
import { growthChart, growthStats } from '../data/storyData'

function GrowthScene() {
  const heightGrowth = (growthStats.heightNowValue - growthStats.heightThenValue).toFixed(1)
  const maxWeight = Math.max(growthStats.weightThenValue, growthStats.weightNowValue)

  return (
    <Scene id="growth" labelledBy="growth-title" tone="orange">
      <div className="scene-copy growth-intro">
        <p className="scene-copy__label">Phase 01: The Growing</p>
        <h2 id="growth-title">You&rsquo;ve grown a ton.</h2>
        <BigNumber variant="inline" accent="var(--crayon-red)" value={`${heightGrowth} inches`} label="taller." />
        <p className="scene-copy__body">
          From a 19.5-inch newborn to a bona fide toddler, tracked visit by visit.
        </p>
      </div>
      <div className="growth-chart-panel">
        <GrowthChart
          data={growthChart}
          yMin={18}
          yMax={36}
          yStep={2}
          ariaLabel="Charlotte's height growth from birth to 24 months. Hover or focus a point on the chart for its exact age, length, and percentile."
        />
      </div>
      <div className="growth-sidebar">
        <Card className="weight-check" shadow>
          <p className="weight-check__title">Weight check</p>
          <div className="weight-check__row">
            <span
              className="weight-check__bar"
              style={{ '--row-width': `${(growthStats.weightThenValue / maxWeight) * 100}%` }}
            />
            <span className="weight-check__label">{growthStats.weightThen} at birth</span>
          </div>
          <div className="weight-check__row">
            <span
              className="weight-check__bar weight-check__bar--now"
              style={{ '--row-width': `${(growthStats.weightNowValue / maxWeight) * 100}%` }}
            />
            <span className="weight-check__label">{growthStats.weightNow} now</span>
          </div>
        </Card>
        <ThenNowCard icon="👟" label="Shoe size" then={growthStats.shoeSize.then} now={growthStats.shoeSize.now} />
        <ThenNowCard icon="👕" label="Wardrobe" then={growthStats.wardrobe.then} now={growthStats.wardrobe.now} />
        <Card className="percentile-badge" shadow>
          <span className="percentile-badge__circle">{growthStats.heightPercentile}</span>
          <span className="percentile-badge__label">height percentile</span>
        </Card>
      </div>
    </Scene>
  )
}

export default GrowthScene
