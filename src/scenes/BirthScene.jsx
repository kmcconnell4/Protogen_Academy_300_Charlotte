import BigNumber from '../components/BigNumber'
import Scene from '../components/Scene'
import { storyStats } from '../data/storyData'

function BirthScene() {
  return (
    <Scene id="born" labelledBy="born-title" tone="blue">
      <div className="scene-copy scene-copy--birth">
        <h1 id="born-title">912 days ago, you were born.</h1>
        <BigNumber {...storyStats.days} />
        <div className="polaroid-stack">
          <div className="photo-placeholder polaroid-stack__photo polaroid-stack__photo--1">[PHOTO PLACEHOLDER: birth 1]</div>
          <div className="photo-placeholder polaroid-stack__photo polaroid-stack__photo--2">[PHOTO PLACEHOLDER: birth 2]</div>
          <div className="photo-placeholder polaroid-stack__photo polaroid-stack__photo--3">[PHOTO PLACEHOLDER: birth 3]</div>
        </div>
      </div>
    </Scene>
  )
}

export default BirthScene
