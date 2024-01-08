import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    eslint({ cache: false, exclude: ['node_modules/**', 'vendor/**', 'app/**'] }),
    react()
  ],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, 'src/')
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss({}), autoprefixer({})]
    }
  }
});
