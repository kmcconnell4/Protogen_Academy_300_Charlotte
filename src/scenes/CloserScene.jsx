import Card from '../components/Card'
import Polaroid from '../components/Polaroid'
import Scene from '../components/Scene'
import { getDaysSinceBirth } from '../data/storyData'

const recapRows = [
  { icon: '✏️', title: '7,300 diapers changed', detail: 'And we survived Diaper City!', delay: 0 },
  { icon: '📚', title: '340 books read & re-read', detail: 'Peekaboo Feelings: the undisputed champ', delay: 90 },
  { icon: '🦒', title: 'Countless family outings & zoo trips', detail: 'Lions were always the favorite', delay: 180 },
  { icon: '❤️', title: '1 incredible little kid', detail: 'Who turned our lives completely upside down', delay: 270 },
]

function CloserScene() {
  return (
    <Scene id="closer" labelledBy="closer-title" tone="pink">
      <div className="scene-copy">
        <p className="scene-copy__label">★ The heartwarming end (for now)</p>
        <h1 id="closer-title">{getDaysSinceBirth()} days of wonder.</h1>
        <Card className="recap-card" shadow>
          <p className="recap-card__title">Let&rsquo;s wrap up the adventure so far...</p>
          <ul className="recap-card__list">
            {recapRows.map((row) => (
              <li key={row.title} className="recap-card__row" style={{ '--row-delay': `${row.delay}ms` }}>
                <span className="recap-card__row-title">
                  <span aria-hidden="true">{row.icon}</span> {row.title}
                </span>
                <span className="recap-card__row-detail">{row.detail}</span>
              </li>
            ))}
          </ul>
        </Card>
        <p className="quote-bubble">&ldquo;And it all went by in an absolute blink.&rdquo;</p>
        <p className="scene-copy__body">Signing off from the nursery floor, Mom, Dad, &amp; Charlotte 😊</p>
      </div>
      <div className="scene-visual">
        <div className="photo-stack">
          <Polaroid
            rotate={-2}
            caption="Our little Big Simba 💛"
            src="/photos/CLOSING_Lantern_Fest.JPG"
            alt="Charlotte with Mom and Dad under a flower archway at a lantern festival"
          />
          <Polaroid
            rotate={2}
            caption={`${getDaysSinceBirth()} days, captured 💫`}
            className="polaroid--offset-right"
            src="/photos/CLOSING_Drawing.jpeg"
            alt="Charlotte coloring with markers by the window"
          />
        </div>
      </div>
    </Scene>
  )
}

export default CloserScene
