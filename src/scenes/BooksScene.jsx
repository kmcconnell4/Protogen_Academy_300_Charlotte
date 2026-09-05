import BigNumber from '../components/BigNumber'
import Polaroid from '../components/Polaroid'
import RankedBarList from '../components/RankedBarList'
import Scene from '../components/Scene'
import { favoriteBooks, storyStats } from '../data/storyData'

function BooksScene() {
  return (
    <Scene id="books" labelledBy="books-title" tone="yellow">
      <div className="scene-copy">
        <p className="scene-copy__label">Phase 03: Repetitive literary genius</p>
        <h2 id="books-title">Again. Again. Again.</h2>
        <BigNumber variant="inline" accent="var(--crayon-blue)" value={storyStats.books.value} label="books devoured." />
        <p className="scene-copy__body">
          Well, actually we read about 5 books but we read them dozens of times each. (Help.)
        </p>
        <RankedBarList items={favoriteBooks} ariaLabel="Favorite books ranked by number of reads" />
      </div>
      <div className="scene-visual">
        <Polaroid
          rotate={-2}
          caption="reading Pout-Pout Fish, live"
          src="/photos/READING_poutpout.MOV"
          video
        />
      </div>
    </Scene>
  )
}

export default BooksScene
