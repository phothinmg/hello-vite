// @ts-nocheck

import { frontmatter } from '/generated/frontmatter/about';
import MDXContent from '/generated/posts/about';
import formatDate from '../../script-lib/util/formatDate';

export default function About (){
   const date = formatDate(frontmatter.date);
    return (
        <>
        <h1>{frontmatter.title}</h1>
        <p>{date}</p>
        <MDXContent/>
        
        </>
    )
}