import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

//https://vitejs.dev/config/
export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 8000,
  },
  build: {
    target: 'esnext',
  },
});
