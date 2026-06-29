import Reveal from './Reveal'
import { leadership } from '../data/portfolio'

export default function Leadership() {
  return (
    <section id="human" className="section section--center" data-section="human">
      <div className="eyebrow"><Reveal as="span">// 06 — OFF THE CLOCK</Reveal></div>
      <Reveal as="h2" className="h2" style={{ maxWidth: '18ch' }}>Leading rooms, not just models.</Reveal>
      <div className="lead-row">
        {leadership.map((l, i) => (
          <Reveal key={l.role} delay={i * 90} className="lead-card">
            <div className="lead-num">0{i + 1} / 0{leadership.length}</div>
            <div className="lead-role">{l.role}</div>
            <div className="lead-detail">{l.detail}</div>
            <div className="lead-tags">
              {l.tags.map((t) => <span className="lead-tag" key={t}>{t}</span>)}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
