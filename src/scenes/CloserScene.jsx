import BigNumber from '../components/BigNumber'
import Scene from '../components/Scene'

function CloserScene() {
  return (
    <Scene id="closer" labelledBy="closer-title" tone="blue">
      <div className="scene-copy">
        <p className="scene-copy__label">Add it all up</p>
        <ul className="closer-equation" aria-label="7,300 diapers, 340 books, 48 expeditions, and a thousand mispronounced words">
          <li className="closer-equation__item closer-equation__item--1">7,300 diapers</li>
          <li className="closer-equation__item closer-equation__item--2">340 books</li>
          <li className="closer-equation__item closer-equation__item--3">48 expeditions</li>
          <li className="closer-equation__item closer-equation__item--4">a thousand mispronounced words</li>
        </ul>
        <h2 id="closer-title" className="closer-finale">One kid. 912 days.</h2>
        <BigNumber value="1" label="Big Simba" detail="And it went by in a blink." />
        <p className="scene-copy__body">All those overwhelming totals were just this one small, enormous life.</p>
        <div className="photo-placeholder">[PHOTO PLACEHOLDER: the closer]</div>
      </div>
    </Scene>
  )
}

export default CloserScene
