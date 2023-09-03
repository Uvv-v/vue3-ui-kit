import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import svgLoader from 'vite-svg-loader';
import dtsPlugin from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    eslint(),
    svgLoader(),
    dtsPlugin({
      outDir: 'lib/types',
      entryRoot: 'src',
      insertTypesEntry: true,
    }),
  ],
  build: {
    outDir: 'lib',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vue3-ui-kit',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        format: 'es',
        globals: {
          vue: 'Vue',
        },
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
          if (id.includes('input')) return 'input';
          if (id.includes('checkbox')) return 'checkbox';
          if (id.includes('list')) return 'list';
          if (id.includes('tabs')) return 'tabs';
          if (id.includes('table')) return 'table';
        },
        chunkFileNames: (chunkInfo) => `${chunkInfo.name}.esm.js`,
      },
    },
  },
});
