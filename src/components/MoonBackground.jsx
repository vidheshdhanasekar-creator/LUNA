export default function MoonBackground({ className = '' }) {
  return (
    <div className={`moon-bg-wrap ${className}`} aria-hidden>
      <div className="moon-bg" />
      <div className="moon-bg-overlay" />
    </div>
  )
}
