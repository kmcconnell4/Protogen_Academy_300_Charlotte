import BigNumber from '../components/BigNumber'
import Scene from '../components/Scene'

function CloserScene() {
  return (
    <Scene id="closer" labelledBy="closer-title" tone="blue">
      <div className="scene-copy">
        <h2 id="closer-title">One kid. 912 days.</h2>
        <BigNumber value="1" label="Big Simba" detail="And it went by in a blink." />
        <p className="closer-equation">7,300 diapers + 340 books + 48 expeditions + a thousand mispronounced words</p>
        <p className="scene-copy__body">All those overwhelming totals were just this one small, enormous life.</p>
        <div className="photo-placeholder">[PHOTO PLACEHOLDER: the closer]</div>
      </div>
    </Scene>
  )
}

export default CloserScene