import BlogPost from '/posts/blog.mdx';
import { MDXProvider } from "@mdx-js/preact";

export default function Blog (){

    return (
        <MDXProvider>
            <BlogPost/>
        </MDXProvider>
    )
}