import Card from './Card'

function TallyTable({ title, rows, ariaLabel }) {
  return (
    <Card as="div" className="tally-table" aria-label={ariaLabel}>
      {title && <p className="tally-table__title">{title}</p>}
      <ul className="tally-table__list">
        {rows.map((row) => (
          <li key={row.animal} className="tally-table__row">
            <span className="tally-table__animal">{row.animal}</span>
            <span className="tally-table__count">
              <span aria-hidden="true">❤</span> ×{row.count}
              <span className="sr-only"> sightings</span>
            </span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default TallyTable
