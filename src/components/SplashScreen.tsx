// ── SPLASH SCREEN — Simple English Only ──
import { useState, useEffect } from 'react'

interface SplashScreenProps {
  onStart: (country: string) => void
}

export default function SplashScreen({ onStart }: SplashScreenProps) {
  const [country, setCountry] = useState('')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    try {
      fetch('https://ipapi.co/json/')
        .then(r => r.json())
        .then(data => {
          setCountry(data.country_code || '')
          setReady(true)
        })
        .catch(() => setReady(true))
    } catch {
      setReady(true)
    }
  }, [])

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center p-6 text-center scanline">
      <div className="max-w-sm animate-fade-in-up">
        <div className="text-5xl mb-6">🔑</div>
        <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Courier New', monospace" }}>
          <span className="text-neon-purple glitch">HYPER</span>
          <span className="text-neon-cyan">REALITY</span>
          <span className="text-neon-pink">KEY</span>
        </h1>
        <p className="text-sm text-gray-400 font-mono mb-8">See through the layers.</p>

        <p className="text-xs text-gray-600 font-mono mb-2">
          {country ? `📍 ${country}` : '📍 Detecting location...'}
        </p>

        {ready && (
          <button
            onClick={() => onStart(country)}
            className="pixel-btn mt-4 w-full justify-center"
          >
            🔍 RECEIVE NEW MESSAGE
          </button>
        )}

        <p className="text-[10px] text-gray-600 font-mono mt-6">
          A philosophical journey through the society of the spectacle
        </p>
      </div>
    </div>
  )
}
