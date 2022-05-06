import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    vue(),
    eslint(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vue3-ui-kit',
      formats: ['es'],
      fileName: (format) => `vue3-ui-kit.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        format: 'es',

        chunkFileNames: (chunkInfo) => `${chunkInfo.name}.es.js`,
        globals: {
          vue: 'Vue',
        },
      },
      manualChunks(id) {
        if (id.includes('node_modules')) return 'vendor';
        if (id.includes('input')) return 'input';
        if (id.includes('list')) return 'list';
        if (id.includes('table')) return 'table';
      },
    },
  },
});
