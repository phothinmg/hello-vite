// @ts-nocheck
import { frontmatter } from '/generated/frontmatter/blog';
import MDXContent from '/generated/posts/blog';
import formatDate from '../../script-lib/util/formatDate';



export default function Blog (){
    const date = formatDate(frontmatter.date);
    return (
        <>
         <h1>{frontmatter.titel}</h1>
         <p>{date}</p>
         <MDXContent/>

        </>
    )
}