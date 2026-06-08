import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* ── Load Google Fonts BEFORE any CSS (side-effect import via style tag) ── */
const fonts = [
  'https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap',
  'https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
]
fonts.forEach(url => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = url
  document.head.appendChild(link)
})

import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
