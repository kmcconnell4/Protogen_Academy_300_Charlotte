import MilestoneTimeline from '../components/MilestoneTimeline'
import Scene from '../components/Scene'
import { milestones } from '../data/storyData'

function MilestoneScene() {
  return (
    <Scene id="milestones" labelledBy="milestones-title" tone="blue">
      <div className="scene-copy scene-copy--map">
        <p className="scene-copy__label">Phase 02: The Firsts</p>
        <h2 id="milestones-title">We&rsquo;ve hit all the firsts.</h2>
        <p className="scene-copy__body">Tap a moment on the timeline to see it up close.</p>
      </div>
      <MilestoneTimeline milestones={milestones} />
    </Scene>
  )
}

export default MilestoneScene
