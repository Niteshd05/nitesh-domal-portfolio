// Immersive deep-space backdrop: a masked perspective grid, drifting starfield
// and nebula glows. Purely decorative, sits behind everything.
export default function Space() {
  return (
    <div id="space" aria-hidden="true">
      <div className="space-grid" />
      <div className="space-stars" />
      <div className="space-stars space-stars--far" />
      <div className="space-vignette" />
    </div>
  )
}
