import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts()],
    resolve: {
        alias: {
            src: path.resolve('src/'), // TODO: config for vite understand import "src/..."
        },
    },
});
