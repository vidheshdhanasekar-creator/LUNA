import SoftAurora from './SoftAurora'

export default function ScienceBackground() {
  return (
    <div className="science-bg-wrap" aria-hidden>
      <SoftAurora
        speed={0.4}
        scale={1.4}
        brightness={0.8}
        color1="#5a4191"
        color2="#e8a0bf"
        noiseFrequency={2.2}
        noiseAmplitude={1.0}
        bandHeight={0.4}
        bandSpread={1.2}
        octaveDecay={0.1}
        layerOffset={0.2}
        colorSpeed={0.8}
        enableMouseInteraction={true}
        mouseInfluence={0.2}
      />
      <svg className="science-bg-svg" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sci-wave-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="sci-wave-2" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--rose)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="sci-wave-3" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="var(--accent-light)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Layered Organic Waveforms */}
        <path d="M 0 150 C 350 50, 700 250, 1050 100 C 1250 20, 1350 80, 1440 40 L 1440 900 L 0 900 Z" fill="url(#sci-wave-1)" />
        <path d="M 0 500 C 400 350, 800 650, 1200 480 C 1350 420, 1400 480, 1440 450 L 1440 900 L 0 900 Z" fill="url(#sci-wave-2)" />
        <path d="M 0 300 C 250 450, 600 200, 950 380 C 1200 500, 1350 400, 1440 420 L 1440 900 L 0 900 Z" fill="url(#sci-wave-3)" />
      </svg>
      <div className="science-bg-glow" />
    </div>
  )
}
