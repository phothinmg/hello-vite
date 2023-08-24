import fs from 'fs/promises';
import path from 'node:path';
import { sync } from 'glob';
import {compile} from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkPrism from 'remark-prism';
import remarkMdxImages from 'remark-mdx-images';
import remarkFootnotes from 'remark-footnotes'
import remarkMath from 'remark-math';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCitation from 'rehype-citation';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
const mdxFiles = sync('./posts/**/*.{mdx,md}');
mdxFiles.forEach(async (mdxFilePath) => {
   const mdxContents = await fs.readFile(mdxFilePath);
   const mdxResults = await compile(mdxContents,{
    providerImportSource:'@mdx-js/preact',
    jsxImportSource: 'preact',
    jsx:true,
    remarkPlugins:[
        remarkFootnotes,
        remarkFrontmatter,
        remarkGfm,
        remarkMath,
        remarkMdxFrontmatter,
        remarkMdxImages,
        remarkPrism,
    ], 
    rehypePlugins:[
        rehypeAutolinkHeadings,
        rehypeCitation,
        rehypeSlug,
    ]
});
const outDir = './mdxs';
const baseName = path.basename(mdxFilePath, path.extname(mdxFilePath));
const exportFilePath = path.join(outDir, `${baseName}` + '.jsx');
fs.writeFile(exportFilePath,`${mdxResults}`);

});




