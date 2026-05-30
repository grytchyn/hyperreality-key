// ── SPLASH SCREEN v3 — Simple ──
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
        .then(data => { setCountry(data.country_code || ''); setReady(true) })
        .catch(() => setReady(true))
    } catch { setReady(true) }
  }, [])

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-sm animate-fade-in-up">
        <div className="text-5xl mb-6">🔑</div>
        <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Courier New', monospace" }}>
          <span className="text-neon-purple">HYPER</span>
          <span className="text-neon-cyan">REALITY</span>
          <span className="text-neon-pink">KEY</span>
        </h1>
        <p className="text-xs text-gray-400 font-mono mb-6">See through the layers.</p>

        <p className="text-[10px] text-gray-600 font-mono mb-4">
          {country ? `📍 ${country}` : '📍 Detecting...'}
        </p>

        {ready && (
          <button onClick={() => onStart(country)} className="pixel-btn w-full justify-center">
            🔍 Start
          </button>
        )}

        <p className="text-[8px] text-gray-600 font-mono mt-6">
          Spot manipulation in social media posts. 4 rounds, 2-3 tools each.
        </p>
      </div>
    </div>
  )
}
