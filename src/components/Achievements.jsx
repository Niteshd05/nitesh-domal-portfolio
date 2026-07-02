import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { useTilt, useCountUp, useMedia } from '../hooks/observers'
import { scrollToY } from '../hooks/scroll'
import { achievements, medalMeta } from '../data/portfolio'

const FOIL = { gold: 'var(--foil-gold)', silver: 'var(--foil-silver)', bronze: 'var(--foil-bronze)' }
const TIER_ORDER = { gold: 0, silver: 1, bronze: 2 }

// gold cards first, then silver, then bronze — a true podium ordering
const ranked = [...achievements].sort((a, b) => TIER_ORDER[a.medal] - TIER_ORDER[b.medal])
const N = ranked.length

const tierCounts = achievements.reduce((acc, a) => { acc[a.medal] = (acc[a.medal] || 0) + 1; return acc }, {})
const TIERS = [
  { key: 'gold', label: 'WINNER', tier: 'gold' },
  { key: 'silver', label: '1ST RUNNER-UP', tier: 'silver' },
  { key: 'bronze', label: '2ND RUNNER-UP', tier: 'bronze' },
]

function BigCount() {
  const [ref, val] = useCountUp(7, 0)
  return <span className="n" ref={ref}>{val}</span>
}

function Header() {
  return (
    <>
      <div className="eyebrow"><Reveal as="span">// 04 TRACK RECORD</Reveal></div>
      <Reveal className="record-head">
        <div className="record-bignum"><BigCount /><span className="x">×</span></div>
        <div>
          <div className="record-sub">podium finishes, and counting</div>
          <div className="tier-ledger">
            {TIERS.map((t) => (
              <div className="tier" key={t.key} style={{ '--foil': FOIL[t.tier] }}>
                <div className="tier-medallion">{medalMeta[t.tier].emoji}</div>
                <div className="tier-info">
                  <span className="count">{tierCounts[t.key] || 0}×</span>
                  <span className="label">{t.label}</span>
                </div>
              </div>
            ))}
            <div className="tier-context">National &amp; inter-college · AI/ML · 2024–2026</div>
          </div>
        </div>
      </Reveal>
    </>
  )
}

/* ---- reduced-motion / fallback: the static foil cabinet ---- */
function FoilCard({ a, rank }) {
  const ref = useTilt(9)
  const meta = medalMeta[a.medal]
  return (
    <article className="foil" ref={ref} style={{ '--rank': meta.color, '--foil': FOIL[a.medal] }}>
      <div className="foil-edge" />
      <div className="foil-sweep" />
      <div className="foil-index">{String(rank).padStart(2, '0')}</div>
      <div className="foil-imgwrap">
        <img src={a.img} alt={`${a.title} - ${a.result}`} loading="lazy" />
        <div className="foil-result">{a.result}</div>
      </div>
      <div className="foil-seal"><span>{meta.emoji}</span></div>
      <div className="foil-body">
        <div className="foil-title">{a.title}</div>
        <div className="foil-meta">
          <span>{a.venue}</span>
          {a.sub && <><span className="pip" /><span>{a.sub}</span></>}
          <span className="pip" /><span className="yr">{a.year}</span>
        </div>
        <a className="foil-link" href={a.link} target="_blank" rel="noopener noreferrer">VIEW LINKEDIN POST ↗</a>
      </div>
      <div className="foil-serial">WIN {String(rank).padStart(2, '0')} / {String(N).padStart(2, '0')}</div>
    </article>
  )
}

/* ---- immersive full-screen panel ---- */
function Panel({ a, rank, active }) {
  const meta = medalMeta[a.medal]
  return (
    <div className="hpanel">
      <article className={`imm ${active ? 'is-active' : ''}`} style={{ '--rank': meta.color, '--foil': FOIL[a.medal] }}>
        <div className="imm-edge" />
        <div className="imm-img">
          <img src={a.img} alt={`${a.title} - ${a.result}`} loading="lazy" />
          <div className="imm-seal"><span>{meta.emoji}</span></div>
          <div className="imm-result">{a.result}</div>
        </div>
        <div className="imm-body">
          <div className="imm-index">{String(rank).padStart(2, '0')}</div>
          <div className="imm-rank">{meta.label} · WIN {String(rank).padStart(2, '0')} / {String(N).padStart(2, '0')}</div>
          <h3 className="imm-title">{a.title}</h3>
          <div className="imm-meta">
            <span>{a.venue}</span>
            {a.sub && <><span className="pip" /><span>{a.sub}</span></>}
            <span className="pip" /><span className="yr">{a.year}</span>
          </div>
          <a className="imm-link" href={a.link} target="_blank" rel="noopener noreferrer">VIEW LINKEDIN POST ↗</a>
        </div>
      </article>
    </div>
  )
}

function ImmersiveGallery() {
  const wrapRef = useRef(null)
  const trackRef = useRef(null)
  const barRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const wrap = wrapRef.current
    const track = trackRef.current
    if (!wrap || !track) return
    let raf = 0, lastIdx = -1
    const loop = () => {
      const total = wrap.offsetHeight - window.innerHeight
      const rect = wrap.getBoundingClientRect()
      let p = total > 0 ? -rect.top / total : 0
      p = Math.min(1, Math.max(0, p))
      const maxShift = (N - 1) * window.innerWidth
      track.style.transform = `translate3d(${(-p * maxShift).toFixed(2)}px,0,0)`
      if (barRef.current) barRef.current.style.width = `${(p * 100).toFixed(2)}%`
      const idx = Math.round(p * (N - 1))
      if (idx !== lastIdx) { lastIdx = idx; setActive(idx) }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  const goTo = (i) => {
    const wrap = wrapRef.current
    if (!wrap) return
    const total = wrap.offsetHeight - window.innerHeight
    const docTop = wrap.getBoundingClientRect().top + window.scrollY
    scrollToY(docTop + (i / (N - 1)) * total)
  }

  return (
    <div className="hgallery" ref={wrapRef} style={{ height: `calc(100vh + ${N - 1} * 88vh)` }}>
      <div className="hpin">
        <div className="htrack" ref={trackRef}>
          {ranked.map((a, i) => <Panel key={a.title} a={a} rank={i + 1} active={active === i} />)}
        </div>
        <div className="hgallery-ui">
          <div className="hg-counter"><b>{String(active + 1).padStart(2, '0')}</b> / {String(N).padStart(2, '0')}</div>
          <div className="hg-track"><div className="hg-bar" ref={barRef} /></div>
          <div className="hg-dots">
            {ranked.map((a, i) => (
              <button key={a.title} className={`hg-dot ${active === i ? 'active' : ''}`} aria-label={`Win ${i + 1}`} onClick={() => goTo(i)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Achievements() {
  const reduce = useMedia('(prefers-reduced-motion: reduce)')
  // Touch / small screens get the native-feeling foil-card grid; the
  // scroll-pinned horizontal gallery is reserved for pointer + wide viewports.
  const compact = useMedia('(max-width: 820px)')
  const useGrid = reduce || compact

  return (
    <section id="record" className="record-section" data-section="record">
      <div className="glow-bg" style={{ width: 520, height: 520, top: '4%', left: '30%', background: 'var(--gold)' }} />
      <div className="record-intro">
        <Header />
        <div className="record-hint">{useGrid ? 'seven wins, three tiers, one record' : 'scroll to walk the cabinet, win by win'}</div>
      </div>

      {useGrid
        ? <div className="record-intro" style={{ paddingTop: 0 }}>
            <div className="cabinet">
              {ranked.map((a, i) => (
                <Reveal key={a.title} delay={(i % 3) * 70}><FoilCard a={a} rank={i + 1} /></Reveal>
              ))}
            </div>
          </div>
        : <ImmersiveGallery />}
    </section>
  )
}
