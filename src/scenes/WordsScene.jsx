import BigNumber from '../components/BigNumber'
import Scene from '../components/Scene'
import { storyStats, wordPair } from '../data/storyData'

function WordsScene() {
  return (
    <Scene id="words" labelledBy="words-title" tone="paper">
      <div className="scene-copy">
        <p className="scene-copy__label">A vocabulary explosion</p>
        <h2 id="words-title">The words showed up all at once.</h2>
        <BigNumber {...storyStats.words} />
        <div className="word-pair" aria-label={`Then: ${wordPair.then}. Now: ${wordPair.now}.`}>
          <span>then: {wordPair.then}</span>
          <span>now: {wordPair.now}</span>
        </div>
        <svg className="word-curve" viewBox="0 0 520 170" role="img" aria-label="A vocabulary curve rising sharply over time">
          <path d="M22 145H500M25 148V15" />
          <path className="word-curve__line" d="M30 142C172 141 265 134 341 102C398 78 418 44 490 22" />
        </svg>
        <div className="photo-placeholder">[PHOTO PLACEHOLDER: then and now]</div>
      </div>
    </Scene>
  )
}

export default WordsScene