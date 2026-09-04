import Card from './Card'

function TallyTable({ title, rows, ariaLabel }) {
  return (
    <Card as="div" className="tally-table" aria-label={ariaLabel}>
      {title && <p className="tally-table__title">{title}</p>}
      <ul className="tally-table__list">
        {rows.map((row) => (
          <li key={row.animal} className="tally-table__row">
            <span className="tally-table__animal">
              {row.animal}
              <span className="sr-only"> — {row.count} sightings</span>
            </span>
            <span className="tally-table__icons" aria-hidden="true">
              {Array.from({ length: row.count }, (_, index) => (
                <span key={index}>{row.icon}</span>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default TallyTable
