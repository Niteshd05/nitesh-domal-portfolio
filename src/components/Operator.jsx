import Reveal from './Reveal'
import { useCountUp } from '../hooks/observers'
import { stats, education, consoleLines } from '../data/portfolio'

function StatCard({ s }) {
  const [ref, val] = useCountUp(s.value, s.dec)
  return (
    <div className="stat-card">
      <div className="stat-num"><span ref={ref}>{val}</span><span style={{ color: 'var(--warm)' }}>{s.suffix}</span></div>
      <div className="lab">{s.label}</div>
      <div className="sub">{s.sub}</div>
    </div>
  )
}

export default function Operator() {
  return (
    <section id="operator" className="section section--center" data-section="operator">
      <div className="glow-bg" style={{ width: 460, height: 460, top: '8%', left: '-6%', background: 'var(--cool)' }} />
      <div className="eyebrow"><Reveal as="span">// 01 THE OPERATOR</Reveal></div>

      <div className="op-grid">
        <div className="op-lead">
          <Reveal as="h2" className="h2" style={{ marginBottom: 28 }}>
            Systems that reason together. Intelligence that fits on a phone.
          </Reveal>
          <Reveal delay={80} style={{ margin: '0 0 20px', fontSize: 'clamp(16px,1.5vw,21px)', lineHeight: 1.65, color: 'var(--bone-dim)', maxWidth: '58ch' }}>
            I build multi-agent systems where models plan, research, critique and synthesize as a council, and then I push that intelligence onto the device itself. Offline. Constrained. Private.
          </Reveal>
          <Reveal delay={140} style={{ margin: 0, fontSize: 'clamp(15px,1.3vw,18px)', lineHeight: 1.65, color: 'var(--bone-dim)', maxWidth: '58ch' }}>
            <span style={{ color: 'var(--cool)' }}>Currently</span> pursuing B.E. Computer Engineering at TSEC Mumbai, grinding competitive programming in Python and shipping agentic side-projects between hackathons.
          </Reveal>
        </div>

        <Reveal delay={120} className="op-console">
          <div className="op-console-bar">
            <i style={{ background: '#FF5F56' }} /><i style={{ background: '#FFBD2E' }} /><i style={{ background: '#27C93F' }} />
            <span style={{ marginLeft: 6 }}>~/operator whoami</span>
          </div>
          <div className="op-console-body">
            {consoleLines.map((l) => (
              <div className="op-line" key={l.k}><span className="ok">›</span><span className="k">{l.k}</span><span className="v">{l.v}</span></div>
            ))}
            <div className="op-council">
              {['Planner', 'Researcher', 'Critic', 'Synthesizer'].map((n) => (
                <span className="op-node" key={n}>{n}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120} className="stat-cards">
        {stats.map((s) => <StatCard key={s.label} s={s} />)}
      </Reveal>

      <Reveal delay={180} className="edu-cards">
        {education.map((e) => (
          <div className="edu-card" key={e.degree}>
            <div className="meta">{e.period} · {e.detail}</div>
            <div className="deg">{e.degree}</div>
            <div className="sch">{e.school}</div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
