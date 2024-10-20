import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './src', // Указываем корневую директорию проекта
  build: {
    outDir: './production', // Указываем директорию для сборки
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'), // Указываем входной файл
      },
    },
  },
  postcss: {
    plugins: [
        require('autoprefixer')
    ]
  }
});