import Modal from './Modal'
import PhotoCarousel from './PhotoCarousel'

function LocationModal({ isOpen, onClose, location }) {
  if (!location) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="location-modal-title">
      <p className="location-modal__eyebrow">
        <span aria-hidden="true">{location.icon}</span> {location.place}
      </p>
      <h2 id="location-modal-title" className="location-modal__title">{location.name}</h2>
      <p className="location-modal__story">{location.story}</p>
      <PhotoCarousel photos={location.photos} />
    </Modal>
  )
}

export default LocationModal
