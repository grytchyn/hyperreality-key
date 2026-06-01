// 🧪 Mission Data Validation Tests
import { describe, it, expect } from 'vitest';
import { getMissionPosts } from '../../src/data/missions';

describe('MissionPosts — all 12 levels', () => {
  const posts = getMissionPosts();

  it('has exactly 12 posts', () => {
    expect(posts.length).toBe(12);
  });

  it('has levels 1-12 in order', () => {
    for (let i = 0; i < 12; i++) {
      expect(posts[i].level).toBe(i + 1);
    }
  });

  it('every post has required fields', () => {
    for (const post of posts) {
      expect(post.level).toBeGreaterThanOrEqual(1);
      expect(post.title).toBeTruthy();
      expect(post.content).toBeTruthy();
      expect(post.source).toBeTruthy();
      expect(post.question).toBeTruthy();
      expect(post.choices).toBeDefined();
      expect(post.choices.length).toBe(4);
      expect(post.correctIndex).toBeGreaterThanOrEqual(0);
      expect(post.correctIndex).toBeLessThan(4);
      expect(post.explanation).toBeTruthy();
      expect(post.neededTool).toBeTruthy();
    }
  });

  it('every post has non-empty content', () => {
    for (const post of posts) {
      expect(post.content.length).toBeGreaterThan(50);
      expect(post.title.length).toBeGreaterThan(5);
    }
  });

  it('every answer choice is unique within the post', () => {
    for (const post of posts) {
      const unique = new Set(post.choices);
      expect(unique.size).toBe(4);
    }
  });

  it('every post has friend data', () => {
    for (const post of posts) {
      expect(post.friendName).toBeTruthy();
      expect(post.friendPreview).toBeTruthy();
      expect(post.friendColor).toMatch(/^#[0-9a-fA-F]{6}$/);
    }
  });
});