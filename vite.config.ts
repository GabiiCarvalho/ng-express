import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      // Configuração do PostCSS
      name: 'tailwindcss',
      apply: 'build',
      config() {
        return {
          css: {
            postcss:  {
              plugins: [tailwindcss(), autoprefixer()],
            },
          },
        };
      },
    },
  ],
  build: {
    assetsDir: 'assets',
  },
});
