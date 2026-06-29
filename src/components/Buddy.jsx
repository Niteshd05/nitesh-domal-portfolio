import { useEffect, useRef } from 'react'
import { onProgress, getProgress, isFast } from '../hooks/scroll'

// The tech-buddy that rides the rail, mirroring scroll progress.
export default function Buddy() {
  const buddyRef = useRef(null)

  useEffect(() => {
    if (isFast()) return
    const buddy = buddyRef.current
    if (!buddy) return
    const topPct = 8, botPct = 88
    let cur = topPct, last = getProgress(), moveTimer = null, raf = 0
    const unsub = onProgress(() => {})
    const loop = () => {
      const progress = getProgress()
      const target = topPct + (botPct - topPct) * progress
      cur += (target - cur) * 0.12
      buddy.style.top = cur.toFixed(2) + 'vh'
      if (Math.abs(progress - last) > 0.0008) {
        const climbing = progress < last
        buddy.classList.toggle('climbing', climbing)
        buddy.classList.add('moving')
        buddy.style.transform = `translate(-50%,-50%) rotate(${climbing ? -6 : 6}deg)`
        clearTimeout(moveTimer)
        moveTimer = setTimeout(() => {
          buddy.classList.remove('moving')
          buddy.style.transform = 'translate(-50%,-50%) rotate(0deg)'
        }, 220)
      }
      last = progress
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); clearTimeout(moveTimer); unsub() }
  }, [])

  return (
    <>
      <div id="buddyRail" aria-hidden="true" />
      <div id="buddy" ref={buddyRef} aria-hidden="true">
        <div className="bob">
          <svg viewBox="0 0 64 78" xmlns="http://www.w3.org/2000/svg">
            <line x1="32" y1="6" x2="32" y2="15" stroke="#FF9E45" strokeWidth="2" strokeLinecap="round" />
            <circle cx="32" cy="5" r="3.4" fill="#FF9E45" />
            <rect x="13" y="14" width="38" height="30" rx="11" fill="#11151D" stroke="#FF9E45" strokeWidth="1.6" />
            <rect x="18" y="20" width="28" height="13" rx="6.5" fill="#0A0D12" />
            <circle cx="25" cy="26.5" r="3.6" fill="#34E0C4" />
            <circle cx="39" cy="26.5" r="3.6" fill="#34E0C4" />
            <circle cx="25" cy="26.5" r="1.4" fill="#EDE8DC" />
            <circle cx="39" cy="26.5" r="1.4" fill="#EDE8DC" />
            <rect x="27" y="38" width="10" height="2" rx="1" fill="#8A9099" />
            <rect x="9" y="24" width="4" height="10" rx="2" fill="#FF9E45" />
            <rect x="51" y="24" width="4" height="10" rx="2" fill="#FF9E45" />
            <rect x="19" y="47" width="26" height="20" rx="8" fill="#11151D" stroke="#34E0C4" strokeWidth="1.6" />
            <circle cx="32" cy="57" r="3" fill="#FF9E45" />
            <rect x="11" y="50" width="6" height="13" rx="3" fill="#11151D" stroke="#34E0C4" strokeWidth="1.3" />
            <rect x="47" y="50" width="6" height="13" rx="3" fill="#11151D" stroke="#34E0C4" strokeWidth="1.3" />
            <rect x="24" y="67" width="6" height="9" rx="3" fill="#11151D" stroke="#FF9E45" strokeWidth="1.3" />
            <rect x="34" y="67" width="6" height="9" rx="3" fill="#11151D" stroke="#FF9E45" strokeWidth="1.3" />
          </svg>
        </div>
        <div id="buddyTrail" />
      </div>
    </>
  )
}
