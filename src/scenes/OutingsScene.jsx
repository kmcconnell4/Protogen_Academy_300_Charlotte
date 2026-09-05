import { useState } from 'react'
import AdventureMap from '../components/AdventureMap'
import LocationModal from '../components/LocationModal'
import Scene from '../components/Scene'
import { locations } from '../data/storyData'

function OutingsScene() {
  const [activeLocationId, setActiveLocationId] = useState(null)
  const activeLocation = locations.find((location) => location.id === activeLocationId) ?? null

  return (
    <Scene id="outings" labelledBy="outings-title" tone="blue">
      <div className="scene-copy scene-copy--map">
        <p className="scene-copy__label">Phase 05: Adventures galore</p>
        <h2 id="outings-title">We&rsquo;ve been on so many adventures.</h2>
        <p className="scene-copy__body">Here are some of your favorite places.</p>
      </div>
      <AdventureMap locations={locations} onSelect={setActiveLocationId} />
      <LocationModal
        isOpen={Boolean(activeLocation)}
        onClose={() => setActiveLocationId(null)}
        location={activeLocation}
      />
    </Scene>
  )
}

export default OutingsScene
