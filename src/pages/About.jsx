import { MDXProvider } from "@mdx-js/preact";
import Post from '/posts/post.mdx';

export function About () {
    return (
        <MDXProvider components={{}}>
            <Post />
        </MDXProvider>
    );
}
    