function RankedBarList({ items, ariaLabel }) {
  const maxValue = Math.max(...items.map((item) => item.reads), 1)

  return (
    <ol className="ranked-bars" aria-label={ariaLabel}>
      {items
        .map((item, index) => ({ ...item, index }))
        .reverse()
        .map((item) => (
          <li
            key={item.title}
            className="ranked-bars__row"
            style={{
              '--row-delay': `${item.index * 90}ms`,
              '--row-width': `${(item.reads / maxValue) * 100}%`,
            }}
          >
            <span className="ranked-bars__bar" style={{ background: item.color }} />
            <span className="ranked-bars__meta">
              <span className="ranked-bars__title">{item.title}</span>
              <span className="ranked-bars__count">
                ~{item.reads} reads{item.note ? ` — ${item.note}` : ''}
              </span>
            </span>
          </li>
        ))}
    </ol>
  )
}

export default RankedBarList
