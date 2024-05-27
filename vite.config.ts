import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const ReactConfig = {
  babel: {
    plugins: ['babel-plugin-react-compiler'],
  },
};

export default defineConfig({
  plugins: [react(ReactConfig)],
  server: {
    open: true,
  },
});
