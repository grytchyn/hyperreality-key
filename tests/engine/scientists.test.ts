// 🧪 Scientists Registry Tests
import { describe, it, expect } from 'vitest';
import { SCIENTIST_AVATARS, getScientistAvatar, SPECTRUM_COLORS } from '../../src/engine/scientists';

describe('SCIENTIST_AVATARS', () => {
  it('has entries for all 10 scientists', () => {
    const keys = Object.keys(SCIENTIST_AVATARS);
    expect(keys.length).toBe(10);
  });

  it('every entry has required fields', () => {
    for (const [, data] of Object.entries(SCIENTIST_AVATARS)) {
      expect(data).toHaveProperty('name');
      expect(data).toHaveProperty('field');
      expect(data).toHaveProperty('avatar');
      expect(data).toHaveProperty('color');
      expect(data.avatar).toMatch(/^\/assets\/scientists\/.+\.png$/);
      expect(data.color).toMatch(/^#[0-9a-fA-F]{6}$/);
    }
  });
});

describe('getScientistAvatar', () => {
  it('returns correct data for known keys', () => {
    const schopenhauer = getScientistAvatar('schopenhauer');
    expect(schopenhauer.name).toBe('Arthur Schopenhauer');
    expect(schopenhauer.avatar).toContain('schopenhauer.png');
  });

  it('returns fallback for unknown keys', () => {
    const fallback = getScientistAvatar('nonexistent');
    expect(fallback).toBeDefined();
    expect(fallback.name).toBe('Arthur Schopenhauer');
  });
});

describe('SPECTRUM_COLORS', () => {
  it('has 10 distinct colors', () => {
    expect(SPECTRUM_COLORS.length).toBe(10);
    const unique = new Set(SPECTRUM_COLORS);
    expect(unique.size).toBe(10);
  });

  it('all are valid hex', () => {
    for (const color of SPECTRUM_COLORS) {
      expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
    }
  });
});