import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { projects } from '../data/portfolio'

export default function Work() {
  const [idx, setIdx] = useState(0)
  const n = projects.length
  const trackRef = useRef(null)
  const drag = useRef({ active: false, sx: 0, dx: 0 })

  const go = (to) => setIdx(Math.max(0, Math.min(n - 1, to)))

  // pointer drag / swipe
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onMove = (x) => {
      if (!drag.current.active) return
      drag.current.dx = x - drag.current.sx
      track.style.transition = 'none'
      track.style.transform = `translateX(calc(${-idx * 100}% + ${drag.current.dx}px))`
    }
    const end = () => {
      if (!drag.current.active) return
      drag.current.active = false
      track.style.transition = ''
      const dx = drag.current.dx
      if (Math.abs(dx) > 60) go(idx + (dx < 0 ? 1 : -1))
      else track.style.transform = `translateX(${-idx * 100}%)`
    }
    const mm = (e) => onMove(e.clientX)
    window.addEventListener('mousemove', mm)
    window.addEventListener('mouseup', end)
    return () => { window.removeEventListener('mousemove', mm); window.removeEventListener('mouseup', end) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx])

  const startDrag = (x) => { drag.current = { active: true, sx: x, dx: 0 } }

  return (
    <section id="work" className="section" data-section="work">
      <div className="eyebrow"><Reveal as="span">// 03 — SELECTED WORK</Reveal></div>
      <Reveal as="h2" className="h2" style={{ maxWidth: '18ch' }}>The council, at work.</Reveal>

      <Reveal className="carousel" id="projCarousel" tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'ArrowLeft') go(idx - 1); else if (e.key === 'ArrowRight') go(idx + 1) }}>
        <div className="carousel-viewport"
          onMouseDown={(e) => { startDrag(e.clientX); e.preventDefault() }}
          onTouchStart={(e) => startDrag(e.touches[0].clientX)}
          onTouchMove={(e) => {
            if (!drag.current.active) return
            drag.current.dx = e.touches[0].clientX - drag.current.sx
            const track = trackRef.current
            track.style.transition = 'none'
            track.style.transform = `translateX(calc(${-idx * 100}% + ${drag.current.dx}px))`
          }}
          onTouchEnd={() => {
            if (!drag.current.active) return
            drag.current.active = false
            trackRef.current.style.transition = ''
            const dx = drag.current.dx
            if (Math.abs(dx) > 60) go(idx + (dx < 0 ? 1 : -1))
            else trackRef.current.style.transform = `translateX(${-idx * 100}%)`
          }}>
          <div className="carousel-track" ref={trackRef} style={{ transform: `translateX(${-idx * 100}%)` }}>
            {projects.map((p, i) => (
              <div className="slide" key={p.id} aria-hidden={i === idx ? 'false' : 'true'}>
                <div className="proj-card">
                  <div className="proj-main proj-anim">
                    <div className="proj-top">
                      <div className="proj-cat">{p.category}</div>
                      <div className="proj-id">{p.id}</div>
                    </div>
                    <h3>{p.name}</h3>
                    <p className="proj-hook">{p.hook}</p>
                    <ul className="proj-bullets">
                      {p.bullets.map((b, j) => <li key={j}><span>→</span><span>{b}</span></li>)}
                    </ul>
                    <div className="proj-foot">
                      <div className="proj-tags">{p.stack.map((t) => <span className="proj-tag" key={t}>{t}</span>)}</div>
                      <a className="proj-link" href={p.code} target="_blank" rel="noopener noreferrer">CODE ↗</a>
                    </div>
                  </div>

                  <div className="proj-vis">
                    <div className="proj-vis-bar">
                      <i style={{ background: '#FF5F56' }} /><i style={{ background: '#FFBD2E' }} /><i style={{ background: '#27C93F' }} />
                      <span style={{ marginLeft: 6 }}>pipeline.run()</span>
                    </div>
                    <div className="proj-graph">
                      <div className="pg-link" />
                      {p.nodes.map((node) => (
                        <div className="pg-node" key={node}><span className="pdot" />{node}</div>
                      ))}
                    </div>
                    <div className="proj-metrics">
                      {p.metrics.map((m) => (
                        <div className="proj-metric" key={m.k}>
                          <div className="mv">{m.v}</div>
                          <div className="mk">{m.k}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-ui">
          <div className="dots">
            {projects.map((p, i) => (
              <button key={p.id} className={`dot ${i === idx ? 'active' : ''}`} aria-label={`Project ${i + 1}`} onClick={() => go(i)} />
            ))}
          </div>
          <div className="carousel-nav">
            <span className="c-counter"><b>{String(idx + 1).padStart(2, '0')}</b> / {String(n).padStart(2, '0')}</span>
            <button className="c-arrow" aria-label="Previous" disabled={idx === 0} onClick={() => go(idx - 1)}>←</button>
            <button className="c-arrow" aria-label="Next" disabled={idx === n - 1} onClick={() => go(idx + 1)}>→</button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
