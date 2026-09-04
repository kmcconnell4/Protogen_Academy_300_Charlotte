function Polaroid({ alt = '', caption, children, className = '', rotate = 0, src, video = false }) {
  const hasMedia = Boolean(src)

  return (
    <figure className={`polaroid ${className}`.trim()} style={{ '--polaroid-rotate': `${rotate}deg` }}>
      <span className="polaroid__tape" aria-hidden="true" />
      <div className={`polaroid__photo${hasMedia ? ' polaroid__photo--media' : ''}`}>
        {hasMedia ? (
          video ? (
            <video className="polaroid__media" src={src} controls playsInline preload="metadata" />
          ) : (
            <img className="polaroid__media" src={src} alt={alt} loading="lazy" />
          )
        ) : (
          children
        )}
      </div>
      {caption && <figcaption className="polaroid__caption">{caption}</figcaption>}
    </figure>
  )
}

export default Polaroid
