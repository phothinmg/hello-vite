
import { MDXProvider } from "@mdx-js/preact";
import Post from '../../posts/post-4.mdx'
import Post2 from '../../posts/post.mdx'



export default function About (){
   
    return (
       <MDXProvider>
        <Post2/>
        <Post/>
       </MDXProvider>
    )
}