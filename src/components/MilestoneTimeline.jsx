import { useState } from 'react'

function MilestoneVisual({ milestone, expanded = false }) {
  if (milestone.media?.type === 'video') {
    return (
      <video
        className="milestone-timeline__media"
        src={milestone.media.src}
        muted={!expanded}
        controls={expanded}
        playsInline
        preload="metadata"
      />
    )
  }

  if (milestone.media?.type === 'photo') {
    return (
      <img
        className="milestone-timeline__media"
        src={milestone.media.src}
        alt={milestone.media.alt}
        loading="lazy"
      />
    )
  }

  return (
    <span className="milestone-timeline__emoji" aria-hidden="true">
      {milestone.emoji ?? '✨'}
    </span>
  )
}

function handleTriggerKeyDown(event, onActivate) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    onActivate()
  }
}

function MilestoneTimeline({ milestones }) {
  const [expandedId, setExpandedId] = useState(null)

  const toggle = (id) => {
    setExpandedId((current) => (current === id ? null : id))
  }

  return (
    <ol className="milestone-timeline" aria-label="Charlotte's milestones, in order">
      {milestones.map((milestone, index) => {
        const isExpanded = milestone.id === expandedId
        const side = index % 2 === 0 ? 'left' : 'right'

        return (
          <li
            key={milestone.id}
            className={`milestone-timeline__item milestone-timeline__item--${side}${isExpanded ? ' milestone-timeline__item--expanded' : ''}`}
            style={{ '--milestone-delay': `${index * 90}ms` }}
          >
            <div
              className={`milestone-timeline__marker${isExpanded ? ' milestone-timeline__marker--expanded' : ''}`}
              role={isExpanded ? undefined : 'button'}
              tabIndex={isExpanded ? undefined : 0}
              aria-expanded={isExpanded ? undefined : false}
              aria-label={isExpanded ? undefined : `${milestone.ageLabel}: ${milestone.title}`}
              onClick={isExpanded ? undefined : () => toggle(milestone.id)}
              onKeyDown={isExpanded ? undefined : (event) => handleTriggerKeyDown(event, () => toggle(milestone.id))}
            >
              <div className="milestone-timeline__marker-media">
                <MilestoneVisual milestone={milestone} expanded={isExpanded} />
              </div>
              {isExpanded && (
                <button
                  type="button"
                  className="milestone-timeline__collapse"
                  aria-label={`Collapse ${milestone.title}`}
                  onClick={() => toggle(milestone.id)}
                >
                  ×
                </button>
              )}
            </div>
            {isExpanded ? (
              <div className="milestone-timeline__details">
                <p className="milestone-timeline__age">{milestone.ageLabel}</p>
                <p className="milestone-timeline__title">{milestone.title}</p>
                <p className="milestone-timeline__description">{milestone.description}</p>
              </div>
            ) : (
              <p className="milestone-timeline__card" aria-hidden="true">
                <span className="milestone-timeline__age">{milestone.ageLabel}</span> — {milestone.title}
              </p>
            )}
          </li>
        )
      })}
    </ol>
  )
}

export default MilestoneTimeline
