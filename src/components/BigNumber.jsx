import useCountUp from '../hooks/useCountUp'

function BigNumber({ accent, className = '', detail, label, value, variant = 'block' }) {
  const style = accent ? { '--stat-accent': accent } : undefined
  const [countRef, displayValue] = useCountUp(value)

  if (variant === 'inline') {
    return (
      <p className={`stat-line ${className}`.trim()} style={style}>
        <span className="stat-line__value" ref={countRef}>{displayValue}</span> {label}
      </p>
    )
  }

  return (
    <div className={`big-number ${className}`.trim()} style={style}>
      <span className="big-number__value" ref={countRef}>{displayValue}</span>
      <span className="big-number__label">{label}</span>
      {detail && <span className="big-number__detail">{detail}</span>}
    </div>
  )
}

export default BigNumber
