// @ts-nocheck
import { MDXProvider } from "@mdx-js/preact";
import HomeContent from './home.mdx';

export function Home (){
	return(
		<MDXProvider>
			<HomeContent/>
		</MDXProvider>
	)
}