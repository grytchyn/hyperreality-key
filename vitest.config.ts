// ⚡ Vitest config for Hyperreality Key
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'node', // No DOM needed for engine tests
    include: ['tests/**/*.test.ts'],
  },
});