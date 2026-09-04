function AdventureMap({ locations, onSelect }) {
  return (
    <div className="adventure-map">
      <svg
        className="adventure-map__base"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        role="presentation"
      >
        <path
          className="adventure-map__land"
          d="M5,90 C2,70 8,50 5,30 C3,15 20,5 40,8 C60,10 75,3 90,10 C98,20 95,40 97,55 C99,75 90,90 70,95 C50,99 20,97 5,90 Z"
        />
        <path
          className="adventure-map__river"
          d="M45,100 C42,85 55,75 50,60 C45,45 58,35 52,20 C48,10 55,5 58,0"
        />
        <path className="adventure-map__road" d="M18,64 L40,76 L64,84 L58,42 L70,12" />
        <g className="adventure-map__tree" transform="translate(15,22)">
          <circle r="3" />
          <circle r="2.2" cx="2" cy="-1.5" />
        </g>
        <g className="adventure-map__tree" transform="translate(85,58)">
          <circle r="3" />
          <circle r="2.2" cx="-2" cy="1.5" />
        </g>
      </svg>
      {locations.map((location, index) => (
        <button
          key={location.id}
          type="button"
          className="adventure-map__pin"
          style={{
            left: `${location.x}%`,
            top: `${location.y}%`,
            '--pin-color': location.color,
            '--pin-delay': `${index * 100}ms`,
          }}
          aria-label={`View story: ${location.name}`}
          onClick={() => onSelect(location.id)}
        >
          <span className="adventure-map__pin-icon" aria-hidden="true">{location.icon}</span>
          <span className="adventure-map__pin-tag" aria-hidden="true">{location.tagline}</span>
        </button>
      ))}
    </div>
  )
}

export default AdventureMap
