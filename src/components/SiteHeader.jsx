import { getDaysSinceBirth } from '../data/storyData'

function SiteHeader() {
  return (
    <header className="site-header">
      <p className="site-header__mark">
        <img className="site-header__icon" src="/favicon.svg" alt="" aria-hidden="true" /> {getDaysSinceBirth()} DAYS
      </p>
      <p className="site-header__hint">Scroll to read our story ↓</p>
    </header>
  )
}

export default SiteHeader
