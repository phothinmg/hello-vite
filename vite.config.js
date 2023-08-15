import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
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
		preact({
			babel:{
				babelrc: true,
			}
		}),
		mdx({
			providerImportSource: '@mdx-js/preact',
			recmaPlugins:[
				remarkGfm,
				remarkFrontmatter,
				
				
			],
			
		}),

	],
});
