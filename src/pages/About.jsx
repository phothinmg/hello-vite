
import { MDXProvider } from "@mdx-js/preact";
import AboutPost from '/posts/about.mdx';



export default function About (){
   
    return (
       <MDXProvider>
        <AboutPost/>
       </MDXProvider>
    )
}