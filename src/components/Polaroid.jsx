function Polaroid({ caption, rotate = 0, className = '', children }) {
  return (
    <figure className={`polaroid ${className}`.trim()} style={{ '--polaroid-rotate': `${rotate}deg` }}>
      <span className="polaroid__tape" aria-hidden="true" />
      <div className="polaroid__photo">{children}</div>
      {caption && <figcaption className="polaroid__caption">{caption}</figcaption>}
    </figure>
  )
}

export default Polaroid
