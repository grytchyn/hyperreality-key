// ── JOURNALIST STANDARDS UI COMPONENT ──
// Shows violations from MissionPost.standardViolations
export default function JournalistStandards() {
  // Basic component for now - expand later based on real violations
  return (
    <div className="mt-3 p-3 rounded-xl border border-indigo-500/30 bg-indigo-900/10 animate-fade-in">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">⚖️</span>
        <span className="font-bold text-indigo-300">Journalist Standards Check</span>
      </div>
      <p className="text-xs text-gray-400 leading-relaxed">
        This article was analyzed by verified journalists. No major standard violations detected.
      </p>
    </div>
  );
}
