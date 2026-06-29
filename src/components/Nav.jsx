import { useEffect, useState } from 'react'
import { scrollToId } from '../hooks/scroll'

const LINKS = [
  { id: 'operator', label: 'OPERATOR' },
  { id: 'work', label: 'WORK' },
  { id: 'record', label: 'WINS' },
  { id: 'experience', label: 'EXPERIENCE' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
  }, [menuOpen])

  const go = (id) => { setMenuOpen(false); scrollToId(id) }

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <button className="brand" onClick={() => go('hero')}><span className="dot" />N.DOMAL</button>
      <button id="burger" aria-label="Menu" onClick={() => setMenuOpen((v) => !v)}><span /></button>
      <div className="navlinks">
        {LINKS.map((l) => (
          <button key={l.id} className="navlink" onClick={() => go(l.id)}>{l.label}</button>
        ))}
        <button className="nav-cta" onClick={() => go('channel')}>OPEN A CHANNEL</button>
      </div>
    </nav>
  )
}
