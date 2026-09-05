import { useEffect, useRef, useState } from 'react'

function parseCountable(raw) {
  if (typeof raw !== 'string') return null

  const match = raw.match(/^([^\d]*)([\d,]*\.?\d+)(.*)$/)
  if (!match) return null

  const [, prefix, numberStr, suffix] = match
  const decimals = numberStr.includes('.') ? numberStr.split('.')[1].length : 0
  const useThousands = numberStr.includes(',')
  const target = parseFloat(numberStr.replace(/,/g, ''))

  if (Number.isNaN(target)) return null

  return { prefix, suffix, decimals, useThousands, target }
}

function formatCounted(current, { decimals, useThousands, prefix, suffix }) {
  const rounded = decimals > 0 ? current.toFixed(decimals) : String(Math.round(current))
  const [intPart, fracPart] = rounded.split('.')
  const formattedInt = useThousands ? Number(intPart).toLocaleString('en-US') : intPart
  return `${prefix}${formattedInt}${fracPart ? `.${fracPart}` : ''}${suffix}`
}

function useCountUp(rawValue, { duration = 1100 } = {}) {
  const nodeRef = useRef(null)
  const hasRun = useRef(false)
  const meta = parseCountable(rawValue)
  const [display, setDisplay] = useState(() => (meta ? formatCounted(0, meta) : rawValue))

  useEffect(() => {
    if (!meta) {
      setDisplay(rawValue)
      return undefined
    }

    const node = nodeRef.current
    if (!node) return undefined

    const runCountUp = () => {
      if (hasRun.current) return
      hasRun.current = true

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setDisplay(formatCounted(meta.target, meta))
        return
      }

      const start = performance.now()

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        setDisplay(formatCounted(meta.target * progress, meta))
        if (progress < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
    }

    if (!('IntersectionObserver' in window)) {
      runCountUp()
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runCountUp()
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawValue])

  return [nodeRef, display]
}

export default useCountUp
