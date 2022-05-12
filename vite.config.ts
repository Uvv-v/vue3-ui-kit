import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import eslint from 'vite-plugin-eslint';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    eslint(),
    svgLoader(),
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
        globals: {
          vue: 'Vue',
        },
        chunkFileNames: (chunkInfo) => `${chunkInfo.name}.es.js`,
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
