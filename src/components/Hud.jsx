import { useEffect, useRef, useState } from 'react'
import { onProgress } from '../hooks/scroll'

const LABELS = {
  hero: '// HERO', operator: '// OPERATOR', stack: '// THE STACK', work: '// SELECTED WORK',
  record: '// TRACK RECORD', experience: '// EXPERIENCE', human: '// OFF THE CLOCK', channel: '// CHANNEL',
}

export default function Hud() {
  const pctRef = useRef(null)
  const [section, setSection] = useState('hero')

  // per-frame progress -> write directly to DOM (no re-render)
  useEffect(() => onProgress((p) => {
    if (pctRef.current) pctRef.current.textContent = String(Math.round(p * 100)).padStart(3, '0')
  }), [])

  // which section is centered in the viewport
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setSection(e.target.getAttribute('data-section'))
      })
    }, { rootMargin: '-46% 0px -46% 0px', threshold: 0 })
    document.querySelectorAll('[data-section]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className="hud hud-left">
        <div>LAT 19.07°N · 72.87°E — MUMBAI</div>
        <div id="statusTxt">STATUS: {section === 'channel' ? 'AVAILABLE' : 'ONLINE'}</div>
      </div>
      <div className="hud hud-right">
        <div id="sectionTxt">{LABELS[section] || `// ${section.toUpperCase()}`}</div>
        <div><span id="pct" ref={pctRef}>000</span> %</div>
      </div>
    </>
  )
}
