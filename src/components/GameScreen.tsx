// ── GAME SCREEN — EN-only, clean ──
import { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import { CORE_TOOLS, getHighlightsFor } from '../data/coreTools'
import { LEVEL_TOOLS, LEVEL_CONFIG } from '../engine/levelTools'
import type { CoreToolId } from '../types'
import type { MissionPost } from '../data/missions'
import Header from './Header'
import { getToolIcon } from './icons/ToolIcons'
import { getScientistAvatar, getScientistField } from '../engine/scientists'

interface GameScreenProps {
  post: MissionPost
  onAnswer: (correct: boolean, points: number) => void
  onNext: () => void
  totalScore?: number
}

const LETTERS = ['A', 'B', 'C', 'D']

const CHOICE_ICONS: Record<number, string[]> = {
  1: ['🎭', '💢', '📋', '🔍'], 2: ['😱', '🧐', '🎉', '😴'],
  3: ['⚓', '👥', '🏛️', '🧠'], 4: ['⚖️', '⚔️', '📊', '🤝'],
  5: ['👑', '❤️', '💯', '🧼'], 6: ['💡', '⚔️', '🛡️', '🕵️'],
  7: ['💾', '📝', '🌐', '🎭'], 8: ['📋', '🔬', '🧪', '📄'],
  9: ['🔄', '🔁', '🔃', '♻️'], 10: ['🐟', '🎣', '🪤', '🌀'],
  11: ['🎯', '📡', '🔍', '🎪'], 12: ['📊', '⚖️', '🏛️', '🔨'],
}

const TUTORIAL_KEY = 'hrk_tutorial_done'

export default function GameScreen({ post, onAnswer, onNext, totalScore }: GameScreenProps) {
  const [activeFilters, setActiveFilters] = useState<CoreToolId[]>([]);
  const [chosenAnswer, setChosenAnswer] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);
  const [showTutorial, setShowTutorial] = useState<boolean>(false);
  const answeredRef = useRef(false);
  const tutorialDismissed = useRef(false);

  // First-time player? Show subtle hint on skills
  useEffect(() => {
    if (post.id === 1 && !localStorage.getItem(TUTORIAL_KEY)) {
      const t = setTimeout(() => setShowTutorial(true), 800)
      return () => clearTimeout(t)
    }
  }, [post.id]);

  const level = post.id;
  const levelCfg = LEVEL_CONFIG[level] || LEVEL_CONFIG[7];
  const availableTools = LEVEL_TOOLS[level] || [];

  const highlights = useMemo(
    () => getHighlightsFor(activeFilters, post.content + ' ' + post.title),
    [activeFilters, post]
  );

  const activeTools = useMemo(() => {
    if (availableTools.length === 0) return [];
    const allHighlights = getHighlightsFor(availableTools, post.content + ' ' + post.title);
    const activeColors = new Set(
      Array.from(allHighlights.values())
        .flat()
        .map(h => h.color)
    );
    return availableTools.filter(toolId => {
      const config = CORE_TOOLS.find(t => t.id === toolId);
      return config && activeColors.has(config.color);
    });
  }, [availableTools, post]);

  const toggleFilter = useCallback((toolId: CoreToolId) => {
    setTooltip(null);
    // First skill tap → dismiss tutorial forever
    if (showTutorial && !tutorialDismissed.current && activeFilters.length === 0) {
      tutorialDismissed.current = true;
      setShowTutorial(false);
      localStorage.setItem(TUTORIAL_KEY, '1');
    }
    const newFilters = activeFilters.includes(toolId)
      ? activeFilters.filter(id => id !== toolId)
      : [...activeFilters, toolId];
    setActiveFilters(newFilters);
  }, [activeFilters, showTutorial]);

  const handlePick = useCallback((idx: number) => {
    if (answeredRef.current) return;
    answeredRef.current = true;
    setChosenAnswer(idx);
    const correct = post.choices ? post.choices[idx].correct : idx === 0;
    setFeedback(correct ? 'correct' : 'wrong');
    onAnswer(correct, correct ? 10 : 0);
  }, [post, onAnswer]);

  const handleNext = useCallback(() => onNext(), [onNext]);

  const showTooltip = useCallback((e: React.MouseEvent, text: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({ text, x: Math.max(6, Math.min(rect.left, window.innerWidth - 320)), y: Math.max(6, rect.top - 12) });
  }, []);
  const hideTooltip = useCallback(() => setTooltip(null), []);

  useEffect(() => {
    setActiveFilters([]);
    setChosenAnswer(null);
    setFeedback(null);
    setTooltip(null);
    answeredRef.current = false;
    window.scrollTo(0, 0);
  }, [post]);

  const renderContent = () => {
    const words = post.content.split(/(\s+)/);
    return words.map((w, i) => {
      const clean = w.toLowerCase().replace(/[^a-z%]/g, '');
      // Check single word first, then phrase-tagged versions
      let entries = clean ? highlights.get(clean) : undefined;
      if (!entries || entries.length === 0) {
        const phraseKey = `__phrase:${clean}`;
        entries = highlights.get(phraseKey);
      }
      if (entries && entries.length > 0) {
        const tip = entries.map(e => e.explanation).join(' • ');
        return (
          <span key={i} className="cursor-pointer rounded-sm px-0.5 font-medium transition-all"
            onMouseEnter={(e) => showTooltip(e, tip)} onMouseLeave={hideTooltip}
            style={{ backgroundColor: entries[0].color + '30', borderBottom: `2px solid ${entries[0].color}`, color: 'var(--color-text-primary)' }}>
            {w}
          </span>
        );
      }
      return <span key={i}>{w}</span>;
    });
  };

  const bgUrl = '/assets/bg/game-bg.png';

  return (
    <div className="relative overflow-hidden min-h-[100dvh]"
      style={{ background: `var(--color-dark-bg) url('${bgUrl}') center center / cover no-repeat` }}>
      <div className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'linear-gradient(180deg, color-mix(in srgb, var(--color-dark-bg) 70%, transparent) 0%, color-mix(in srgb, var(--color-dark-bg) 85%, transparent) 50%, color-mix(in srgb, var(--color-dark-bg) 95%, transparent) 100%)' }} />
      
      {tooltip && (
        <div className="fixed z-[9999] pointer-events-none" style={{ left: tooltip.x, top: tooltip.y, transform: 'translateY(-100%)' }}>
          <div className="rounded-xl p-3 shadow-2xl max-w-[320px] text-[12px] leading-relaxed"
            style={{ background: 'var(--color-dark-card)', border: `1px solid ${levelCfg.color}50`, color: 'var(--color-text-secondary)', fontFamily: "'Work Sans', 'Inter', system-ui, sans-serif", fontWeight: 450 }}>{tooltip.text}</div>
        </div>
      )}

      <Header level={post.id} levelName={levelCfg.name} levelColor={levelCfg.color} showLevel={true} totalScore={totalScore} />

      <div className="max-w-2xl mx-auto p-3 sm:p-4 space-y-4 relative z-10 animate-fade-in-up">
        <div className="relative rounded-2xl overflow-hidden"
          style={{ background: 'linear-gradient(180deg, color-mix(in srgb, var(--color-dark-card) 95%, transparent), color-mix(in srgb, var(--color-dark-card) 98%, transparent))', border: `1px solid ${levelCfg.color}25`, boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 30px ${levelCfg.color}10` }}>
          <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, transparent, ${levelCfg.color}, ${levelCfg.color}cc, transparent)`, opacity: 0.7 }} />
          <div className="px-4 py-2 flex items-center gap-2 border-b border-gray-800/50">
            <div className="flex gap-1"><div className="w-3 h-3 rounded-full bg-red-500/80" /><div className="w-3 h-3 rounded-full bg-yellow-500/80" /><div className="w-3 h-3 rounded-full bg-green-500/80" /></div>
            <div className="flex-1 rounded-full px-3 py-1.5 text-[10px] text-gray-500 font-mono truncate" style={{ background: 'rgba(255,255,255,0.04)' }}>🔒 {post.source.toLowerCase().replace(/[^a-z0-9]/g, '')}.com</div>
            <span className="text-[9px] font-mono uppercase tracking-wider" style={{ color: levelCfg.color + '99' }}>{levelCfg.name}</span>
          </div>
          <div className="px-4 pt-3 pb-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0" style={{ background: `linear-gradient(135deg, ${'#ec4899'}, ${'#ec4899'}88)` }}>{post.source[0]}</div>
              <div><div className="text-xs font-bold text-white">{post.source}</div><div className="text-[9px] text-gray-500">{"Post"} shared · just now</div></div>
              <span className="ml-auto text-[8px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ color: '#ec4899', border: `1px solid ${'#ec4899'}40`, background: `${'#ec4899'}15` }}>{'Politics'}</span>
            </div>
            <h2 className="text-base font-bold text-white mb-2 leading-snug">{post.title}</h2>
            <div className="text-[13px] leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>{renderContent()}</div>
          </div>
          <div className="px-4 py-2 flex items-center gap-4 text-[11px] border-b border-gray-800/30" style={{ color: 'var(--color-text-muted)' }}><span>💬 12</span><span>🔄 47</span><span>❤️ 120</span></div>
          <div className="px-4 py-3">
            {showTutorial && (
              <div className="absolute inset-0 z-30 flex items-start justify-center pt-8 pointer-events-none rounded-2xl"
                style={{ height: '100%' }}>
                <div className="absolute inset-2 rounded-xl animate-pulse-slow pointer-events-none"
                  style={{ boxShadow: '0 0 40px 8px color-mix(in srgb, var(--color-neon-purple) 20%, transparent)', border: '1px solid color-mix(in srgb, var(--color-neon-purple) 25%, transparent)' }} />
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-[10px] font-bold tracking-wide leading-relaxed animate-fade-in-up"
                  style={{ background: 'color-mix(in srgb, var(--color-dark-card) 90%, transparent)', border: '1px solid color-mix(in srgb, var(--color-neon-purple) 25%, transparent)', color: 'var(--color-text-secondary)' }}>
                  <span className="text-[14px] animate-pulse" style={{ color: 'var(--color-neon-purple)' }}>💡</span>
                  Tap any <span className="font-bold" style={{ color: 'var(--color-neon-purple)' }}>Skill</span> to highlight manipulation patterns in the article
                </div>
              </div>
            )}
            {activeTools.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                {activeTools.map(toolId => {
                  const t = CORE_TOOLS.find(x => x.id === toolId);
                  if (!t) return null;
                  const isOn = activeFilters.includes(toolId);
                  const IconComponent = getToolIcon(toolId);
                  return (
                    <button key={toolId} onClick={() => toggleFilter(toolId)}
                      onMouseEnter={(e) => showTooltip(e, `${t.name}: ${t.description}`)} onMouseLeave={hideTooltip}
                      className="flex flex-col items-center gap-1 p-2 rounded-xl border transition-all duration-200 cursor-pointer active:scale-95" style={{ borderColor: isOn ? t.color : `${t.color}15`, background: isOn ? `${t.color}20` : 'rgba(255,255,255,0.02)', boxShadow: isOn ? `0 0 15px ${t.color}20` : 'none' }}>
                      <IconComponent size={32} glowColor={t.color} active={isOn} />
                      <span className="text-[8px] font-bold uppercase tracking-wider leading-tight" style={{ color: isOn ? t.color : 'var(--color-text-muted)' }}>{t.name}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="rounded-2xl p-5" style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-dark-card) 95%, transparent), color-mix(in srgb, var(--color-dark-surface) 90%, transparent))', border: `1px solid ${levelCfg.color}20` }}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${levelCfg.color}20` }}><span className="text-sm">🎯</span></div>
            <div><span className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: levelCfg.color }}>Question</span></div>
          </div>
          <p className="text-sm font-bold mb-4 leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>{'Which manipulation technique is being used in this article?'}</p>
          <div className="space-y-2.5">
            {(post.choices || ['Option A','Option B']).map((choice, idx) => {
              const selected = chosenAnswer === idx;
              const isCorrect = choice.correct;
              const showResult = chosenAnswer !== null;
              let borderColor = 'rgba(255,255,255,0.06)';
              if (showResult && isCorrect) borderColor = 'color-mix(in srgb, var(--color-pixel-green) 60%, transparent)';
              else if (showResult && selected) borderColor = 'color-mix(in srgb, var(--color-neon-red) 60%, transparent)';
              else if (selected) borderColor = `${levelCfg.color}99`;
              return (
                <button key={idx} onClick={() => handlePick(idx)} disabled={chosenAnswer !== null}
                  className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 text-sm font-medium text-left transition-all duration-150 cursor-pointer disabled:cursor-default active:scale-[0.99]"
                  style={{ borderColor, background: showResult && isCorrect ? 'color-mix(in srgb, var(--color-pixel-green) 10%, transparent)' : selected ? `${levelCfg.color}20` : 'rgba(255,255,255,0.02)',
                    color: !chosenAnswer ? 'var(--color-text-primary)' : isCorrect ? 'var(--color-pixel-green)' : selected ? 'var(--color-neon-red)' : 'var(--color-text-muted)',
                    opacity: showResult && !isCorrect && !selected ? 0.4 : 1 }}>
                  <span className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0"
                    style={{ background: showResult && isCorrect ? 'var(--color-pixel-green)' : selected && showResult ? 'var(--color-neon-red)' : selected ? levelCfg.color : 'rgba(255,255,255,0.06)',
                      color: showResult && isCorrect ? '#000' : selected ? '#000' : 'var(--color-text-muted)',
                      boxShadow: selected && !showResult ? `0 0 12px ${levelCfg.color}50` : 'none' }}>
                    {showResult && isCorrect ? '✓' : showResult && selected ? '✗' : CHOICE_ICONS[level]?.[idx] || LETTERS[idx]}
                  </span>
                  <span className="flex-1">{choice.text}</span>
                  {showResult && isCorrect && <span className="text-xs text-green-500">✓ correct</span>}
                </button>
              );
            })}
          </div>

          {chosenAnswer !== null && (
            <div className="mt-5 flex items-start gap-2.5 animate-fade-in-up">
              <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 mt-0.5"
                style={{ border: `2px solid ${levelCfg.color}50`, boxShadow: `0 0 12px ${levelCfg.color}30` }}>
                <img src={getScientistAvatar(post.scientist).avatar} alt={"Post"}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
              </div>
              <div className="flex-1 min-w-0 rounded-2xl px-3.5 py-2.5 text-[11px] leading-relaxed"
                style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-dark-card) 95%, transparent), color-mix(in srgb, var(--color-dark-surface) 95%, transparent))',
                  border: `1px solid ${levelCfg.color}25`, color: 'var(--color-text-secondary)', borderTopLeftRadius: '4px',
                  fontFamily: "'Work Sans', system-ui, sans-serif", fontWeight: 430, lineHeight: 1.6 }}>
                <div className="text-[9px] font-bold mb-1 flex items-center gap-2" style={{ color: levelCfg.color, fontFamily: "'Work Sans', system-ui, sans-serif", letterSpacing: '0.02em' }}>
                  <span>{"Post"} · {getScientistField(post.scientist)}</span>
                  <a href={getScientistAvatar(post.scientist).wiki} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[8px] font-mono uppercase tracking-wider transition-all hover:scale-105"
                    style={{ background: `${levelCfg.color}20`, color: levelCfg.color + 'cc', border: `1px solid ${levelCfg.color}30` }}
                    onClick={(e) => e.stopPropagation()}>
                    📖 wiki
                  </a>
                </div>
                {post.explanation}
              </div>
            </div>
          )}

          {chosenAnswer !== null && (
            <button onClick={handleNext}
              className="w-full mt-4 px-6 py-4 rounded-xl font-bold text-base uppercase tracking-wider transition-all cursor-pointer hover:translate-y-[-1px] active:scale-[0.98] flex items-center justify-center gap-2"
              style={{ background: feedback === 'correct'
                ? 'linear-gradient(135deg, var(--color-pixel-green), color-mix(in srgb, var(--color-pixel-green) 85%, #000))'
                : 'linear-gradient(135deg, var(--color-neon-red), color-mix(in srgb, var(--color-neon-red) 85%, #000))',
                color: '#fff',
                boxShadow: feedback === 'correct'
                ? '0 4px 20px color-mix(in srgb, var(--color-pixel-green) 40%, transparent)'
                : '0 4px 20px color-mix(in srgb, var(--color-neon-red) 40%, transparent)' }}>
              {feedback === 'correct' ? '✓ Continue →' : '✗ Continue →'}
              <span className="text-[11px] opacity-70">{level + 1 > 12 ? '🏁 Results' : `Level ${level + 1}`}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}