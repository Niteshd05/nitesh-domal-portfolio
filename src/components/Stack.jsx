import { useState } from 'react'
import Reveal from './Reveal'
import { useInView } from '../hooks/observers'
import { skills, stackAccents } from '../data/portfolio'

const monoLabel = (it) => it.m || it.n.replace(/[^A-Za-z0-9]/g, '').slice(0, 2)

function TechPill({ it }) {
  const [failed, setFailed] = useState(!it.s)
  return (
    <span className="tech">
      {failed
        ? <span className="tech-mono">{monoLabel(it)}</span>
        : <img className="tech-ic" alt="" src={`https://cdn.simpleicons.org/${it.s}${it.c ? '/' + it.c : ''}`} onError={() => setFailed(true)} />}
      <span>{it.n}</span>
    </span>
  )
}

function StackCard({ cat, items, accent, delay }) {
  const [ref, inView] = useInView()
  const avg = Math.round(items.reduce((a, b) => a + (b.lvl || 0), 0) / items.length)
  return (
    <div
      ref={ref}
      className={`stack-card reveal ${inView ? 'in' : ''}`}
      style={{ '--accent': accent, transitionDelay: delay ? `${delay}ms` : undefined }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
      }}
    >
      <div className="stack-head">
        <span className="sdot" />
        <span className="stack-cat">{cat}</span>
        <span className="stack-count">{items.length} TOOLS</span>
      </div>
      <div className="stack-bar"><i style={{ width: inView ? `${avg}%` : 0 }} /></div>
      <div className="tech-wrap">
        {items.map((it) => <TechPill key={it.n} it={it} />)}
      </div>
    </div>
  )
}

export default function Stack() {
  const cats = Object.keys(skills)
  const counts = cats.map((c) => skills[c].length)
  const total = counts.reduce((a, b) => a + b, 0)

  return (
    <section id="stack" className="section" data-section="stack">
      <div className="glow-bg" style={{ width: 420, height: 420, top: '20%', right: '-8%', background: 'var(--glow)' }} />
      <div className="eyebrow"><Reveal as="span">// 02 — THE STACK</Reveal></div>
      <Reveal as="h2" className="h2" style={{ maxWidth: '14ch' }}>System manifest.</Reveal>

      <div className="stack-layout">
        <Reveal className="stack-aside">
          <div className="stack-aside-label">// MANIFEST</div>
          <div className="stack-summary">
            <span className="big">{total}</span>
            <span className="cap">technologies<br />across {cats.length} domains</span>
          </div>
          <div className="compbar" role="img" aria-label="technology distribution by domain">
            {cats.map((c, i) => (
              <i key={c} style={{ width: `${(counts[i] / total) * 100}%`, background: stackAccents[i % stackAccents.length] }} />
            ))}
          </div>
          <div className="complegend">
            {cats.map((c, i) => (
              <div className="cl-row" key={c}>
                <span className="cl-dot" style={{ background: stackAccents[i % stackAccents.length] }} />
                <span className="cl-name">{c}</span>
                <span className="cl-count">{counts[i]}</span>
              </div>
            ))}
          </div>
          <p className="stack-note">
            From low-level <b>C</b> to on-device <b>transformers</b> — the full toolchain behind the agentic builds, kept battle-tested and current.
          </p>
        </Reveal>

        <div className="stack-grid">
          {cats.map((cat, i) => (
            <StackCard key={cat} cat={cat} items={skills[cat]} accent={stackAccents[i % stackAccents.length]} delay={(i % 2) * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}
