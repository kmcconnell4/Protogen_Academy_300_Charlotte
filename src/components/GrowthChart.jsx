import { useState } from 'react'

const WIDTH = 640
const HEIGHT = 320
const PADDING_LEFT = 34
const PADDING_RIGHT = 12
const PADDING_TOP = 20
const PADDING_BOTTOM = 34
const PLOT_WIDTH = WIDTH - PADDING_LEFT - PADDING_RIGHT
const PLOT_HEIGHT = HEIGHT - PADDING_TOP - PADDING_BOTTOM

function GrowthChart({ data, yMin = 18, yMax = 36, yStep = 2, xTickStep = 6, ariaLabel }) {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const maxMonths = data[data.length - 1].months

  const xScale = (months) => PADDING_LEFT + (months / maxMonths) * PLOT_WIDTH
  const yScale = (value) => PADDING_TOP + (1 - (value - yMin) / (yMax - yMin)) * PLOT_HEIGHT

  const yGridValues = []
  for (let value = yMin; value <= yMax; value += yStep) yGridValues.push(value)

  const xTicks = []
  for (let months = 0; months <= maxMonths; months += xTickStep) xTicks.push(months)

  const linePoints = data.map((point) => `${xScale(point.months)},${yScale(point.charlotte)}`).join(' ')
  const selected = selectedIndex === null ? null : data[selectedIndex]

  const showPoint = (index) => setSelectedIndex(index)
  const hidePoint = (index) => setSelectedIndex((current) => (current === index ? null : current))

  return (
    <div className="growth-chart" role="group" aria-label={ariaLabel}>
      <svg className="growth-chart__svg" viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
        <g aria-hidden="true">
          {yGridValues.map((value) => (
            <g key={value}>
              <line
                className="growth-chart__gridline"
                x1={PADDING_LEFT}
                x2={WIDTH - PADDING_RIGHT}
                y1={yScale(value)}
                y2={yScale(value)}
              />
              <text className="growth-chart__gridlabel" x={PADDING_LEFT - 6} y={yScale(value)}>
                {value}&quot;
              </text>
            </g>
          ))}
          {xTicks.map((months) => (
            <text key={months} className="growth-chart__xlabel" x={xScale(months)} y={HEIGHT - PADDING_BOTTOM + 20}>
              {months === 0 ? 'Birth' : `${months}mo`}
            </text>
          ))}
          <polyline
            className="growth-chart__line growth-chart__line--charlotte"
            points={linePoints}
            pathLength="1"
          />
          {data.map((point, index) => (
            <circle
              key={point.label}
              className={`growth-chart__point${index === selectedIndex ? ' growth-chart__point--active' : ''}`}
              cx={xScale(point.months)}
              cy={yScale(point.charlotte)}
              r={index === selectedIndex ? 6 : 4}
              style={{ '--point-delay': `${300 + index * 60}ms` }}
            />
          ))}
        </g>
        {data.map((point, index) => (
          <circle
            key={point.label}
            className="growth-chart__hit"
            cx={xScale(point.months)}
            cy={yScale(point.charlotte)}
            r="10"
            tabIndex={0}
            aria-label={`${point.label}: ${point.charlotte} inches, ${point.percentile}th percentile, measured ${point.date}`}
            onMouseEnter={() => showPoint(index)}
            onMouseLeave={() => hidePoint(index)}
            onFocus={() => showPoint(index)}
            onBlur={() => hidePoint(index)}
          />
        ))}
      </svg>
      {selected && (
        <span
          className="growth-chart__callout"
          style={{
            left: `${(xScale(selected.months) / WIDTH) * 100}%`,
            top: `${(yScale(selected.charlotte) / HEIGHT) * 100}%`,
          }}
        >
          <strong>{selected.label}</strong>
          <span>
            {selected.charlotte}&quot; · {selected.percentile}th percentile
          </span>
          <span className="growth-chart__callout-date">{selected.date}</span>
        </span>
      )}
    </div>
  )
}

export default GrowthChart
