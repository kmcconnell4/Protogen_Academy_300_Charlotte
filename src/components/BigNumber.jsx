function BigNumber({ className = '', detail, label, value }) {
  return (
    <div className={`big-number ${className}`.trim()}>
      <span className="big-number__value">{value}</span>
      <span className="big-number__label">{label}</span>
      {detail && <span className="big-number__detail">{detail}</span>}
    </div>
  )
}

export default BigNumber