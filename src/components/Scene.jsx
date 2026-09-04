import { useEffect, useRef, useState } from 'react'

function Scene({ children, className = '', id, labelledBy, tone = 'paper' }) {
  const sceneRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const scene = sceneRef.current

    if (!scene || !('IntersectionObserver' in window)) {
      setProgress(1)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => setProgress(entry.intersectionRatio),
      { threshold: [0, 0.15, 0.35, 0.6, 0.85, 1] },
    )

    observer.observe(scene)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sceneRef}
      id={id}
      aria-labelledby={labelledBy}
      className={`scene scene--${tone} ${className}`.trim()}
      data-visible={progress > 0.15}
      style={{ '--scene-progress': progress }}
    >
      <div className="scene__content">{children}</div>
    </section>
  )
}

export default Scene