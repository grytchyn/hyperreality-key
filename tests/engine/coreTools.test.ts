// 🧪 CoreTools Engine Tests — critical path
import { describe, it, expect } from 'vitest';
import { getHighlightsFor, CORE_TOOLS } from '../../src/data/coreTools';

describe('getHighlightsFor — tool-to-text matching', () => {
  it('finds bad-arguments keywords — map key is matched word', () => {
    const text = 'This is absolutely the only way to think. Everyone knows this is true.';
    const result = getHighlightsFor(['bad-arguments'], text);
    const badArgsColor = CORE_TOOLS.find(t => t.id === 'bad-arguments')?.color;
    expect(badArgsColor).toBeDefined();
    const hasBadArgsMatch = Array.from(result.values()).some(
      entries => entries.some(e => e.color === badArgsColor)
    );
    expect(hasBadArgsMatch).toBe(true);
  });

  it('finds feelings-check keywords', () => {
    const text = 'This terrifying discovery will shock you. Act now before it\'s too late!';
    const result = getHighlightsFor(['feelings-check'], text);
    const feelColor = CORE_TOOLS.find(t => t.id === 'feelings-check')?.color;
    const hasFeelMatch = Array.from(result.values()).some(
      entries => entries.some(e => e.color === feelColor)
    );
    expect(hasFeelMatch).toBe(true);
  });

  it('finds brain-check keywords', () => {
    const text = 'The vast majority of people agree. Everyone knows it\'s the only choice.';
    const result = getHighlightsFor(['brain-check'], text);
    expect(result.size).toBeGreaterThan(0);
    const brainColor = CORE_TOOLS.find(t => t.id === 'brain-check')?.color;
    const hasMatch = Array.from(result.values()).some(
      entries => entries.some(e => e.color === brainColor)
    );
    expect(hasMatch).toBe(true);
  });

  it('returns empty map for non-matching text', () => {
    const text = 'The cat sat on the mat. It was a pleasant afternoon.';
    const result = getHighlightsFor(['bad-arguments'], text);
    expect(result.size).toBe(0);
  });

  it('supports multiple tools simultaneously', () => {
    const text = 'This absolutely terrifying discovery everyone is talking about must be true.';
    const result = getHighlightsFor(['bad-arguments', 'feelings-check', 'brain-check'], text);
    expect(result.size).toBeGreaterThanOrEqual(2);
  });

  it('handles empty text', () => {
    const result = getHighlightsFor(['bad-arguments'], '');
    expect(result.size).toBe(0);
  });

  it('handles empty tool list', () => {
    const result = getHighlightsFor([], 'Some text here');
    expect(result.size).toBe(0);
  });
});