import { useEffect, useRef, useState } from 'react'

// Reveal-on-scroll: returns a ref + boolean. Honors ?fast preview mode.
export function useInView(opts = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (document.body.classList.contains('preview')) { setInView(true); return }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setInView(true); io.unobserve(e.target) }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px', ...opts })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, inView]
}

// Count-up: animates 0 -> target when scrolled into view.
export function useCountUp(target, dec = 0) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (document.body.classList.contains('preview')) { setVal(target); return }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        io.unobserve(el)
        const dur = 1300, t0 = performance.now()
        const tick = (now) => {
          const k = Math.min(1, (now - t0) / dur)
          const eased = 1 - Math.pow(1 - k, 3)
          setVal(target * eased)
          if (k < 1) requestAnimationFrame(tick)
          else setVal(target)
        }
        requestAnimationFrame(tick)
      })
    }, { threshold: 0.6 })
    io.observe(el)
    return () => io.disconnect()
  }, [target])
  return [ref, Number(val).toFixed(dec)]
}

// 3D pointer-tilt + spotlight. Writes CSS vars to the element for cheap GPU transforms.
export function useTilt(max = 8) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(pointer:coarse)').matches) return
    let raf = 0
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--rx', `${(0.5 - py) * max}deg`)
        el.style.setProperty('--ry', `${(px - 0.5) * max}deg`)
        el.style.setProperty('--mx', `${px * 100}%`)
        el.style.setProperty('--my', `${py * 100}%`)
      })
    }
    const reset = () => {
      cancelAnimationFrame(raf)
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    }
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', reset)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', reset)
      cancelAnimationFrame(raf)
    }
  }, [max])
  return ref
}
