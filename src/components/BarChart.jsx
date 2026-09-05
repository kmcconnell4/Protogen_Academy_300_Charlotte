function BarChart({ data, unit = '/day', ariaLabel }) {
  const maxValue = Math.max(...data.map((point) => point.value), 1)
  const gridLines = [maxValue, Math.round(maxValue / 2), 0]

  return (
    <div className="bar-chart" role="group" aria-label={ariaLabel}>
      <div className="bar-chart__grid" aria-hidden="true">
        {gridLines.map((line) => (
          <span key={line} className="bar-chart__grid-label">{line}{unit}</span>
        ))}
      </div>
      <div className="bar-chart__bars">
        {data.map((point) => (
          <div
            key={point.label}
            className="bar-chart__column"
            tabIndex={0}
            aria-label={`${point.label}: ${point.value}${unit}`}
            style={{ '--bar-height': `${(point.value / maxValue) * 100}%` }}
          >
            {point.flag && <span className="bar-chart__flag">{point.flag}</span>}
            <span className="bar-chart__tooltip" aria-hidden="true">{point.value}{unit}</span>
            <span className="bar-chart__bar" style={{ background: point.color }} />
            <span className="bar-chart__label">{point.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BarChart
