import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Pages reports "" for a user site and "/repo" (no trailing slash) for a project site.
function siteBase(): string {
  const raw = process.env.BASE_PATH?.trim();
  if (!raw || raw === '/') return '/';
  const withLeading = raw.startsWith('/') ? raw : `/${raw}`;
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
}

export default defineConfig({
  base: siteBase(),
  plugins: [react()],
});
