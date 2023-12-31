import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import path from 'path';
// @ts-ignore
import url from 'url';

// https://vitejs.dev/config/

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
