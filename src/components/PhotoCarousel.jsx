import { useRef } from 'react'

function PhotoCarousel({ photos }) {
  const trackRef = useRef(null)

  if (!photos || photos.length === 0) {
    return <p className="photo-carousel__empty">Photos coming soon!</p>
  }

  const scrollByPage = (direction) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className="photo-carousel">
      <div className="photo-carousel__track" ref={trackRef}>
        {photos.map((photo) => (
          <div key={photo.src} className="photo-carousel__item">
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </div>
        ))}
      </div>
      {photos.length > 3 && (
        <div className="photo-carousel__controls">
          <button
            type="button"
            className="photo-carousel__arrow"
            onClick={() => scrollByPage(-1)}
            aria-label="Previous photos"
          >
            ‹
          </button>
          <button
            type="button"
            className="photo-carousel__arrow"
            onClick={() => scrollByPage(1)}
            aria-label="Next photos"
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}

export default PhotoCarousel
