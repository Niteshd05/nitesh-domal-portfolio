import Lenis from 'lenis'

// Module-level scroll manager. Progress is broadcast to subscribers imperatively
// (no React state) so the buddy/HUD can update per-frame without re-rendering.
let lenis = null
let progress = 0
const listeners = new Set()

export const isFast = () => /[?&]fast\b/.test(location.search)

function setProgress(p) {
  progress = p || 0
  listeners.forEach((fn) => fn(progress))
}

export function initScroll() {
  const nativeProgress = () => {
    const h = document.documentElement
    setProgress(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight))
  }

  if (isFast()) {
    window.addEventListener('scroll', nativeProgress, { passive: true })
    nativeProgress()
    if (location.hash) {
      const t = document.getElementById(location.hash.slice(1))
      if (t) setTimeout(() => { t.scrollIntoView(); nativeProgress() }, 60)
    }
    return
  }

  if (lenis) return
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true, wheelMultiplier: 1 })
  const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf) }
  requestAnimationFrame(raf)
  lenis.on('scroll', ({ progress: p }) => setProgress(p))
}

export function onProgress(fn) {
  listeners.add(fn)
  fn(progress)
  return () => listeners.delete(fn)
}

export function getProgress() { return progress }

export function scrollToId(id) {
  const t = document.getElementById(id)
  if (!t) return
  if (lenis) lenis.scrollTo(t, { offset: 0, duration: 1.2 })
  else t.scrollIntoView({ behavior: 'smooth' })
}

export function scrollToY(y) {
  if (lenis) lenis.scrollTo(y, { duration: 1 })
  else window.scrollTo({ top: y, behavior: 'smooth' })
}
