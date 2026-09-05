import Modal from './Modal'
import PlacementCard from './PlacementCard'
import { birthChart, birthDetails } from '../data/storyData'

function StarChartModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="star-chart-title">
      <p className="star-chart__eyebrow">
        <span aria-hidden="true">✨</span> Star Chart
      </p>
      <h2 id="star-chart-title" className="star-chart__title">Written in the Stars</h2>
      <p className="star-chart__subtitle">Born {birthDetails.born} — the cosmos had a plan.</p>
      <div className="star-chart__grid">
        {birthChart.map((placement) => (
          <PlacementCard key={placement.kind} {...placement} />
        ))}
      </div>
    </Modal>
  )
}

export default StarChartModal
