import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import eslint from 'vite-plugin-eslint';
import svgLoader from 'vite-svg-loader';
import dtsPlugin from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    eslint(),
    svgLoader(),
    dtsPlugin({
      outputDir: 'lib/types',
      entryRoot: 'src',
      insertTypesEntry: true,
      noEmitOnError: true,
    }),
  ],
  build: {
    outDir: 'lib',

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
        if (id.includes('checkbox')) return 'checkbox';
        if (id.includes('list')) return 'list';
        if (id.includes('table')) return 'table';
      },
    },
  },
});
