import Reveal from './Reveal'
import { experience, resume } from '../data/portfolio'

const INSIDE = [
  'Education & coursework',
  'Every hackathon win',
  'The complete skill stack',
  'Project deep-dives',
]

export default function Experience() {
  const e = experience
  return (
    <section id="experience" className="section" data-section="experience">
      <div className="eyebrow"><Reveal as="span">// 05 — WORK EXPERIENCE</Reveal></div>
      <Reveal as="h2" className="h2" style={{ maxWidth: '18ch' }}>Shipping in the real world.</Reveal>

      <div className="exp-wrap">
        <Reveal className="exp-card">
          <div className="exp-head">
            <div>
              <div className="exp-role">{e.role}</div>
              <div className="exp-co">{e.company}</div>
            </div>
            <div className="exp-meta">
              <div>{e.period}</div>
              <div className="mode">{e.mode}</div>
            </div>
          </div>
          <ul className="exp-list">
            {e.bullets.map((b, i) => <li key={i}><span>{b}</span></li>)}
          </ul>
          <div className="exp-actions">
            <a className="btn btn-ghost" href={e.cert} target="_blank" rel="noopener noreferrer">INTERNSHIP CERTIFICATE ↗</a>
          </div>
        </Reveal>

        <Reveal delay={100} className="doc-card">
          <div className="mono" style={{ fontSize: 11, letterSpacing: '.16em', color: 'var(--warm)' }}>// RÉSUMÉ</div>
          <h4>The full dossier.</h4>
          <p>Education, projects, the complete skill stack and every hackathon — in one PDF.</p>
          <div className="doc-stats">
            <div className="doc-stat"><div className="v">7×</div><div className="k">WINS</div></div>
            <div className="doc-stat"><div className="v">9.67</div><div className="k">CGPA</div></div>
            <div className="doc-stat"><div className="v">3+</div><div className="k">PROJECTS</div></div>
          </div>
          <ul className="doc-inside">
            {INSIDE.map((item) => <li key={item}><span className="chk">✓</span>{item}</li>)}
          </ul>
          <a className="btn btn-warm doc-dl" href={resume} target="_blank" rel="noopener noreferrer">DOWNLOAD RÉSUMÉ ↗</a>
        </Reveal>
      </div>
    </section>
  )
}
