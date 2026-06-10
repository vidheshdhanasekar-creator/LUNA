import SoftAurora from './SoftAurora'

export default function AboutBackground() {
  return (
    <div className="about-bg-wrap" aria-hidden>
      <SoftAurora
        speed={0.4}
        scale={1.3}
        brightness={0.8}
        color1="#4a3580"
        color2="#c8a2c8"
        noiseFrequency={2.4}
        noiseAmplitude={1.0}
        bandHeight={0.45}
        bandSpread={1.1}
        octaveDecay={0.1}
        layerOffset={0.15}
        colorSpeed={0.8}
        enableMouseInteraction={true}
        mouseInfluence={0.2}
      />
      <svg className="about-bg-svg" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="abt-wave-1" x1="0" y1="0" x2="1" y2="0.8">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="abt-wave-2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--lavender)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Large Flowing Curves */}
        <path d="M -100 250 C 400 450, 800 100, 1200 350 C 1350 450, 1500 350, 1600 400 L 1600 900 L -100 900 Z" fill="url(#abt-wave-1)" />
        <path d="M -100 450 C 300 300, 650 600, 1000 400 C 1250 250, 1400 450, 1600 300 L 1600 900 L -100 900 Z" fill="url(#abt-wave-2)" />
      </svg>
      <div className="about-bg-overlay" />
    </div>
  )
}
