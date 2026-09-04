function BigNumber({ accent, className = '', detail, label, value, variant = 'block' }) {
  const style = accent ? { '--stat-accent': accent } : undefined

  if (variant === 'inline') {
    return (
      <p className={`stat-line ${className}`.trim()} style={style}>
        <span className="stat-line__value">{value}</span> {label}
      </p>
    )
  }

  return (
    <div className={`big-number ${className}`.trim()} style={style}>
      <span className="big-number__value">{value}</span>
      <span className="big-number__label">{label}</span>
      {detail && <span className="big-number__detail">{detail}</span>}
    </div>
  )
}

export default BigNumber
