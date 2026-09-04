import BigNumber from '../components/BigNumber'
import Scene from '../components/Scene'
import { favoriteBooks, storyStats } from '../data/storyData'

function BooksScene() {
  return (
    <Scene id="books" labelledBy="books-title" tone="orange">
      <div className="scene-copy">
        <p className="scene-copy__label">The whole shelf</p>
        <h2 id="books-title">Again. Again. Again.</h2>
        <BigNumber {...storyStats.books} />
        <ol className="book-stack" aria-label="Favorite books, oldest favorite at the bottom">
          {favoriteBooks
            .map((book, index) => ({ book, index }))
            .reverse()
            .map(({ book, index }) => (
              <li key={book} className={`book-stack__book book-stack__book--${index + 1}`}>
                {book}
                {index === 0 && <span>the OG: 200 reads</span>}
              </li>
            ))}
        </ol>
        <div className="photo-placeholder">[PHOTO PLACEHOLDER: reading time]</div>
      </div>
    </Scene>
  )
}

export default BooksScene