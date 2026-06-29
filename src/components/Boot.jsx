import { useEffect, useRef, useState } from 'react'

const LINES = [
  '> initializing council...',
  '> loading agents [4/4]  Planner · Researcher · Critic',
  '> establishing channels...',
  '> handshake ok — encrypting',
  '> NITESH.DOMAL — online_',
]

export default function Boot({ onDone }) {
  const [shown, setShown] = useState(0)
  const [pct, setPct] = useState(0)
  const [done, setDone] = useState(false)
  const timer = useRef(null)
  const finished = useRef(false)

  const finish = () => {
    if (finished.current) return
    finished.current = true
    clearTimeout(timer.current)
    setDone(true)
    onDone?.()
  }

  useEffect(() => {
    let i = 0
    const step = () => {
      if (finished.current) return
      if (i < LINES.length) {
        i += 1
        setShown(i)
        setPct(Math.round((i / LINES.length) * 100))
        timer.current = setTimeout(step, 340)
      } else {
        timer.current = setTimeout(finish, 520)
      }
    }
    timer.current = setTimeout(step, 350)
    return () => clearTimeout(timer.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div id="bootscreen" className={done ? 'done' : ''}>
      <div id="bootlog">
        {LINES.slice(0, shown).map((line, idx) => (
          <div
            key={idx}
            className="show"
            style={idx === LINES.length - 1 ? { color: 'var(--bone)' } : undefined}
          >
            {line}
          </div>
        ))}
      </div>
      <div id="boottrack"><div id="bootbar" style={{ width: `${pct}%` }} /></div>
      <button id="bootskip" onClick={finish}>SKIP →</button>
    </div>
  )
}
