import Card from './Card'

function ThenNowCard({ icon, label, then, now }) {
  return (
    <Card className="then-now-card" shadow>
      {icon && <span className="then-now-card__icon" aria-hidden="true">{icon}</span>}
      <span className="then-now-card__label">{label}</span>
      <span className="then-now-card__value">
        <span className="then-now-card__then">{then}</span>
        <span className="then-now-card__arrow" aria-hidden="true">→</span>
        <span className="then-now-card__now">{now}</span>
      </span>
    </Card>
  )
}

export default ThenNowCard
