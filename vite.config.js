import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { minifyHtml } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    viteSingleFile(),
    minifyHtml(),
  ],
});
