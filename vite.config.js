import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 1234,
    },
    root: './src/',
    build: {
        outDir: '../dist/',
        emptyOutDir: true,
    },
})
