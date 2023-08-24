import { frontmatter } from '/mdxs/blog';
import MDXContent from '/mdxs/blog';



export default function Blog (){
    return (
        <>
         <h1>{frontmatter.titel}</h1>
         <p>{frontmatter.date}</p>
         <MDXContent/>

        </>
    )
}