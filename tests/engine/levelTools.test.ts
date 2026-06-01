// 🧪 Level Tools Tests — tool progression validation
import { describe, it, expect } from 'vitest';
import { LEVEL_TOOLS, LEVEL_CONFIG, getToolsForLevel, getPrimaryToolForLevel } from '../../src/engine/levelTools';

describe('LEVEL_TOOLS — progression', () => {
  it('has entries for all 12 levels', () => {
    for (let i = 1; i <= 12; i++) {
      expect(LEVEL_TOOLS[i]).toBeDefined();
      expect(LEVEL_TOOLS[i].length).toBeGreaterThanOrEqual(3);
    }
  });

  it('level 1 starts with exactly 3 tools', () => {
    expect(LEVEL_TOOLS[1].length).toBe(3);
  });

  it('each level adds exactly 1 new tool (levels 2-10)', () => {
    for (let i = 2; i <= 10; i++) {
      expect(LEVEL_TOOLS[i].length).toBe(LEVEL_TOOLS[i - 1].length + 1);
    }
  });

  it('levels 11-12 have all 12 tools', () => {
    expect(LEVEL_TOOLS[11].length).toBe(12);
    expect(LEVEL_TOOLS[12].length).toBe(12);
  });

  it('tools are cumulative (never remove a tool)', () => {
    for (let i = 2; i <= 12; i++) {
      for (const tool of LEVEL_TOOLS[i - 1]) {
        expect(LEVEL_TOOLS[i]).toContain(tool);
      }
    }
  });

  it('getToolsForLevel works as fallback', () => {
    expect(getToolsForLevel(1)).toEqual(LEVEL_TOOLS[1]);
    expect(getToolsForLevel(99)).toEqual(LEVEL_TOOLS[1]); // fallback
  });
});

describe('LEVEL_CONFIG — metadata', () => {
  it('has config for all 12 levels', () => {
    for (let i = 1; i <= 12; i++) {
      expect(LEVEL_CONFIG[i]).toBeDefined();
      expect(LEVEL_CONFIG[i].color).toBeDefined();
      expect(LEVEL_CONFIG[i].scientistName).toBeDefined();
      expect(LEVEL_CONFIG[i].scientistKey).toBeDefined();
      expect(LEVEL_CONFIG[i].theme).toBeDefined();
    }
  });

  it('has valid hex colors for all levels', () => {
    for (let i = 1; i <= 12; i++) {
      expect(LEVEL_CONFIG[i].color).toMatch(/^#[0-9a-fA-F]{6}$/);
    }
  });

  it('has valid scientist keys', () => {
    const validKeys = ['schopenhauer', 'cialdini', 'kahneman', 'tajfel', 'haidt', 'barthes', 'baudrillard', 'foucault', 'sunstein', 'mccombs_shaw'];
    for (let i = 1; i <= 12; i++) {
      expect(validKeys).toContain(LEVEL_CONFIG[i].scientistKey);
    }
  });
});

describe('getPrimaryToolForLevel', () => {
  it('returns bad-arguments for level 1', () => {
    expect(getPrimaryToolForLevel(1)).toBe('bad-arguments');
  });

  it('returns a different tool for each level 2-10', () => {
    const tools = new Set<string>();
    for (let i = 2; i <= 10; i++) {
      const tool = getPrimaryToolForLevel(i);
      expect(tool).toBeTruthy();
      tools.add(tool!);
    }
    // Should have 9 distinct tools for levels 2-10
    expect(tools.size).toBe(9);
  });
});