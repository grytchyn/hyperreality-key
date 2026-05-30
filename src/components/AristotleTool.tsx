// ── ARISTOTLE TOOL — English Only ──
import { useState, useCallback } from 'react'
import { EPL_QUESTIONS, FALLACY_QUESTIONS, BIAS_QUESTIONS } from '../data/philosophers_tier1'
import type { AnalysisAnswer } from '../types'

interface AristotleToolProps {
  type?: 'ethos-pathos-logos' | 'fallacies' | 'cognitive-biases'
  onComplete: (answers: AnalysisAnswer[], score: number) => void
}

export default function AristotleTool({ type, onComplete }: AristotleToolProps) {
  const [mode, setMode] = useState<'choose' | 'epl' | 'fallacies' | 'biases'>(
    type === 'ethos-pathos-logos' ? 'epl' : type === 'fallacies' ? 'fallacies' : type === 'cognitive-biases' ? 'biases' : 'choose'
  )
  const [eplIdx, setEplIdx] = useState(0); const [eplAns, setEplAns] = useState<AnalysisAnswer[]>([])
  const [falIdx, setFalIdx] = useState(0); const [falAns, setFalAns] = useState<AnalysisAnswer[]>([])
  const [biasIdx, setBiasIdx] = useState(0); const [biasAns, setBiasAns] = useState<AnalysisAnswer[]>([])
  const [selected, setSelected] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)
  const [lastCorrect, setLastCorrect] = useState(false)
  const [lastExplanation, setLastExplanation] = useState('')

  const handleSubmit = useCallback((type: 'epl' | 'fallacies' | 'biases') => {
    if (!selected) return
    let q: any
    if (type === 'epl') q = EPL_QUESTIONS[eplIdx]
    else if (type === 'fallacies') q = FALLACY_QUESTIONS[falIdx]
    else q = BIAS_QUESTIONS[biasIdx]
    const correct = selected === q.correctAnswer
    setLastCorrect(correct)
    setLastExplanation(q.explanation || '')
    setShowFeedback(true)
  }, [selected, eplIdx, falIdx, biasIdx])

  const handleNext = useCallback((type: 'epl' | 'fallacies' | 'biases') => {
    const answer: AnalysisAnswer = { questionId: `${type}-${type === 'epl' ? eplIdx : type === 'fallacies' ? falIdx : biasIdx}`, selected, correct: lastCorrect }
    setShowFeedback(false); setSelected('')
    if (type === 'epl') {
      const next = eplIdx + 1
      if (next >= EPL_QUESTIONS.length) { onComplete([...eplAns, answer], eplAns.reduce((s, a) => s + (a.correct ? 20 : 0), 0) + (lastCorrect ? 20 : 0)) }
      else { setEplIdx(next); setEplAns(prev => [...prev, answer]) }
    } else if (type === 'fallacies') {
      const next = falIdx + 1
      if (next >= FALLACY_QUESTIONS.length) { onComplete([...falAns, answer], falAns.reduce((s, a) => s + (a.correct ? 20 : 0), 0) + (lastCorrect ? 20 : 0)) }
      else { setFalIdx(next); setFalAns(prev => [...prev, answer]) }
    } else {
      const next = biasIdx + 1
      if (next >= BIAS_QUESTIONS.length) { onComplete([...biasAns, answer], biasAns.reduce((s, a) => s + (a.correct ? 20 : 0), 0) + (lastCorrect ? 20 : 0)) }
      else { setBiasIdx(next); setBiasAns(prev => [...prev, answer]) }
    }
  }, [selected, lastCorrect, eplIdx, falIdx, biasIdx, eplAns, falAns, biasAns, onComplete])

  // Mode select
  if (mode === 'choose') {
    return (
      <div className="p-4 space-y-3">
        <p className="text-xs text-gray-400 text-center mb-3">Choose what to analyze:</p>
        <button onClick={() => setMode('epl')} className="w-full p-4 rounded-lg border border-amber-500/50 bg-dark-surface hover:bg-dark-card text-left hover:border-amber-500">
          <div className="text-xl mb-1">🎭</div>
          <div className="font-bold text-white text-sm">Ethos / Pathos / Logos</div>
          <div className="text-[11px] text-gray-400 mt-1">Is it Authority, Emotion, or Logic?</div>
        </button>
        <button onClick={() => setMode('fallacies')} className="w-full p-4 rounded-lg border border-red-500/50 bg-dark-surface hover:bg-dark-card text-left hover:border-red-500">
          <div className="text-xl mb-1">⚡</div>
          <div className="font-bold text-white text-sm">Find Bad Arguments</div>
          <div className="text-[11px] text-gray-400 mt-1">Spot logical tricks like Straw Man, Ad Hominem</div>
        </button>
        <button onClick={() => setMode('biases')} className="w-full p-4 rounded-lg border border-cyan-500/50 bg-dark-surface hover:bg-dark-card text-left hover:border-cyan-500">
          <div className="text-xl mb-1">🧠</div>
          <div className="font-bold text-white text-sm">Find Brain Shortcuts</div>
          <div className="text-[11px] text-gray-400 mt-1">Spot thinking errors like Confirmation Bias, Anchoring</div>
        </button>
      </div>
    )
  }

  // Question view
  const questions = mode === 'epl' ? EPL_QUESTIONS : mode === 'fallacies' ? FALLACY_QUESTIONS : BIAS_QUESTIONS
  const idx = mode === 'epl' ? eplIdx : mode === 'fallacies' ? falIdx : biasIdx
  const q = questions[idx]
  if (!q) return null

  const modeLabels = { epl: 'Ethos / Pathos / Logos', fallacies: 'Find Bad Arguments', biases: 'Find Brain Shortcuts' }
  const modeColors = { epl: '#f59e0b', fallacies: '#ef4444', biases: '#06b6d4' }
  const questionsPerMode = { epl: EPL_QUESTIONS.length, fallacies: FALLACY_QUESTIONS.length, biases: BIAS_QUESTIONS.length }

  return (
    <div className="p-4">
      <div className="flex justify-between text-xs text-gray-500 font-mono mb-3">
        <span>Question {idx + 1}/{questionsPerMode[mode]}</span>
        <span style={{ color: modeColors[mode] }}>{modeLabels[mode]}</span>
      </div>
      <div className="bg-dark-surface border rounded-lg p-4 mb-4" style={{ borderColor: `${modeColors[mode]}40` }}>
        <p className="text-white text-base leading-relaxed font-medium">"{'statement' in q ? q.statement : ''}"</p>
      </div>
      {!showFeedback ? (
        <>
          <div className={mode === 'epl' ? 'grid grid-cols-3 gap-2 mb-4' : 'space-y-2 mb-4'}>
            {mode === 'epl' ? (
              (['ethos', 'pathos', 'logos'] as const).map(o => (
                <button key={o} onClick={() => setSelected(o)}
                  className={`p-4 rounded-lg border-2 text-center transition-all min-h-[60px] ${selected === o ? o === 'ethos' ? 'border-green-500 bg-green-500/10 text-green-400' : o === 'pathos' ? 'border-red-500 bg-red-500/10 text-red-400' : 'border-blue-500 bg-blue-500/10 text-blue-400' : 'border-dark-border bg-dark-surface text-gray-300 hover:border-gray-600'}`}>
                  <div className="text-lg mb-1">{o === 'ethos' ? '👤' : o === 'pathos' ? '❤️' : '🧮'}</div>
                  <div className="text-xs font-bold uppercase">{o}</div>
                </button>
              ))
            ) : (
              (q as any).options?.map((opt: any) => (
                <button key={opt.id} onClick={() => setSelected(opt.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${selected === opt.id ? 'border-red-500 bg-red-500/10 text-white' : 'border-dark-border bg-dark-surface text-gray-300 hover:border-gray-600'}`}>
                  <div className="font-medium text-sm">{opt.label}</div>
                </button>
              ))
            )}
          </div>
          <button onClick={() => handleSubmit(mode)} disabled={!selected}
            className="w-full py-3 rounded-lg bg-neon-purple text-white font-bold text-sm transition disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neon-purple/80">
            Confirm
          </button>
        </>
      ) : (
        <div className={`p-4 rounded-lg border mb-4 ${lastCorrect ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10'}`}>
          <p className={`font-bold mb-2 ${lastCorrect ? 'text-green-400' : 'text-red-400'}`}>
            {lastCorrect ? '✅ Correct!' : '❌ Not quite.'}
          </p>
          <p className="text-sm text-gray-300">{lastExplanation}</p>
          <button onClick={() => handleNext(mode)}
            className="mt-3 w-full py-2 rounded bg-dark-surface border border-gray-600 text-gray-300 font-bold text-sm hover:bg-dark-border transition">
            {idx + 1 >= questionsPerMode[mode] ? 'Complete Analysis' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  )
}
