import { scrollToId } from '../hooks/scroll'

const NAME1 = 'NITESH'
const NAME2 = 'DOMAL'

export default function Hero({ booted }) {
  const charDelays = NAME1.length + NAME2.length
  const tail = 0.35 + charDelays * 0.035

  const Char = ({ c, i }) => (
    <span
      className={`heroChar ${booted ? 'in' : ''}`}
      style={{ animationDelay: `${0.35 + i * 0.035}s` }}
    >
      {c}
    </span>
  )

  return (
    <section id="hero" data-section="hero">
      <div id="heroEyebrow" className={booted ? 'in' : ''}>// PORTFOLIO 2026</div>
      <h1>
        <span className="line">{NAME1.split('').map((c, i) => <Char key={i} c={c} i={i} />)}</span>
        <span className="line stroke">{NAME2.split('').map((c, i) => <Char key={i} c={c} i={NAME1.length + i} />)}</span>
      </h1>
      <div
        id="heroSub"
        className={booted ? 'in' : ''}
        style={{ transitionDelay: `${tail}s` }}
      >
        <div className="mono" style={{ fontSize: 'clamp(11px,1.15vw,14px)', letterSpacing: '.16em', color: 'var(--bone-dim)' }}>
          AI/ML ENGINEER · EDGE AI · AGENTIC SYSTEMS
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button className="btn btn-ghost" onClick={() => scrollToId('work')}>VIEW WORK</button>
          <button className="btn btn-warm" onClick={() => scrollToId('channel')}>OPEN A CHANNEL ↗</button>
        </div>
      </div>

      <div className={`hero-panel ${booted ? 'in' : ''}`} aria-hidden="true" style={{ transitionDelay: `${tail + 0.15}s` }}>
        <div className="hp-bar">
          <i style={{ background: '#FF5F56' }} /><i style={{ background: '#FFBD2E' }} /><i style={{ background: '#27C93F' }} />
          <span className="hp-label">agent://nitesh.domal</span>
        </div>
        <div className="hp-body">
          <div className="hp-row"><span className="hp-k">role</span><span className="hp-v">AI/ML Engineer</span></div>
          <div className="hp-row"><span className="hp-k">focus</span><span className="hp-v">Multi-Agent · Edge AI</span></div>
          <div className="hp-row"><span className="hp-k">wins</span><span className="hp-v"><b>7×</b> hackathon podiums</span></div>
          <div className="hp-row"><span className="hp-k">cgpa</span><span className="hp-v"><b>9.67</b> / 10</span></div>
          <div className="hp-row"><span className="hp-k">cert</span><span className="hp-v">Microsoft Azure AI-900</span></div>
          <div className="hp-row"><span className="hp-k">base</span><span className="hp-v">Mumbai, India</span></div>
          <div className="hp-status"><span className="hp-dot" />available for work</div>
        </div>
      </div>

      <div id="cue" className={booted ? 'in' : ''} style={{ transitionDelay: `${tail + 0.3}s` }}>
        <span>SCROLL</span>
        <span style={{ animation: 'floatcue 1.8s ease-in-out infinite' }}>↓</span>
      </div>
    </section>
  )
}
