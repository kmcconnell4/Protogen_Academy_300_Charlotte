function PlacementCard({ icon, label, sign, degree, blurb, constellation }) {
  return (
    <div className="placement-card">
      <svg
        className="placement-card__constellation"
        viewBox="0 0 240 150"
        role="img"
        aria-label={`A hand-drawn ${sign} constellation`}
      >
        <path d={constellation.path} />
        {constellation.points.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="6" />
        ))}
      </svg>
      <p className="placement-card__label">
        <span aria-hidden="true">{icon}</span> {label.toUpperCase()}
      </p>
      <p className="placement-card__sign">{sign}</p>
      <p className="placement-card__degree">{degree}</p>
      <p className="placement-card__blurb">{blurb}</p>
    </div>
  )
}

export default PlacementCard
