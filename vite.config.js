import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
// https://vitejs.dev/config/
export default defineConfig({
	server:{
		port: 1847,
		},
	build:{
		manifest: true,
		sourcemap: true
	},
	plugins: [
		preact(),
		
		],
		optimizeDeps: {
			include: [
				'@mdx-js/mdx'
			],
	 },
});
