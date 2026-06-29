import { useEffect, useState } from 'react'
import { initScroll, isFast } from './hooks/scroll'
import Space from './components/Space'
import Grain from './components/Grain'
import Boot from './components/Boot'
import Nav from './components/Nav'
import Hud from './components/Hud'
import Buddy from './components/Buddy'
import Hero from './components/Hero'
import Operator from './components/Operator'
import Stack from './components/Stack'
import Work from './components/Work'
import Achievements from './components/Achievements'
import Experience from './components/Experience'
import Leadership from './components/Leadership'
import Channel from './components/Channel'

const fast = isFast()

export default function App() {
  const [booted, setBooted] = useState(fast)

  useEffect(() => { initScroll() }, [])

  return (
    <>
      <Space />
      <Grain />
      {!fast && <Boot onDone={() => setBooted(true)} />}
      <Nav />
      <Hud />
      <Buddy />
      <main>
        <Hero booted={booted} />
        <Operator />
        <Stack />
        <Work />
        <Achievements />
        <Experience />
        <Leadership />
        <Channel />
      </main>
    </>
  )
}
