import Reveal from './Reveal'
import { resume } from '../data/portfolio'

// Kept faithful to the original — the user liked this section as-is.
export default function Channel() {
  return (
    <section id="channel" className="section section--center" data-section="channel">
      <div className="eyebrow" style={{ marginBottom: 24 }}><Reveal as="span">// 07 OPEN A CHANNEL</Reveal></div>
      <Reveal as="h2">Let&apos;s build<br />something that thinks.</Reveal>
      <Reveal delay={80} className="chan-btns">
        <a className="btn btn-warm" href="mailto:niteshdomal2005@gmail.com" style={{ fontSize: 13, padding: '14px 26px', borderRadius: 34 }}>niteshdomal2005@gmail.com ↗</a>
        <a className="btn btn-ghost" href={resume} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, padding: '14px 26px', borderRadius: 34 }}>DOWNLOAD RÉSUMÉ</a>
      </Reveal>
      <Reveal delay={140} className="chan-social">
        <a href="https://www.linkedin.com/in/nitesh-domal" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a>
        <a href="https://github.com/niteshd05" target="_blank" rel="noopener noreferrer">GITHUB ↗</a>
      </Reveal>
      <div className="footer-line">© 2026 NITESH DOMAL · BUILT WITH TOO MUCH CAFFEINE · STATUS: AVAILABLE FOR WORK</div>
    </section>
  )
}
