import { useEffect, useRef, useState } from 'react'

function Scene({ children, className = '', id, labelledBy, tone = 'paper' }) {
  const sceneRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const scene = sceneRef.current

    if (!scene) {
      setProgress(1)
      return undefined
    }

    const updateProgress = () => {
      const bounds = scene.getBoundingClientRect()
      const visibleHeight = Math.min(bounds.bottom, window.innerHeight) - Math.max(bounds.top, 0)
      const ratio = Math.max(0, visibleHeight) / Math.min(bounds.height, window.innerHeight)

      setProgress((current) => Math.max(current, ratio))
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    updateProgress()

    if (!('IntersectionObserver' in window)) {
      return () => {
        window.removeEventListener('scroll', updateProgress)
        window.removeEventListener('resize', updateProgress)
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setProgress((current) => Math.max(current, entry.intersectionRatio))
      }
    }, { threshold: [0, 0.15, 0.35, 0.6, 0.85, 1] })

    observer.observe(scene)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
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