import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkPrism from 'remark-prism';
import remarkMdxImages from 'remark-mdx-images';
import remarkFootnotes from 'remark-footnotes'
import remarkMath from 'remark-math';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypeCitation from 'rehype-citation';
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
		mdx({
			providerImportSource: '@mdx-js/preact',
			remarkPlugins:[
				remarkGfm,
				remarkFrontmatter,
				remarkPrism,
				remarkMdxImages,
				remarkFootnotes,
				remarkMath,

		
				
				],
			rehypePlugins:[
				rehypeSlug,
				rehypeAutolinkHeadings,
				rehypeKatex,
				rehypeCitation,
			]
			
			
			}),
		],
});
