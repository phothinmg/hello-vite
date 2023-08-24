/*@jsxRuntime automatic @jsxImportSource preact*/
import {useMDXComponents as _provideComponents} from "@mdx-js/preact";
export const frontmatter = {
  "titel": "MD",
  "date": "2023-08-18"
};
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, _provideComponents(), props.components);
  return <><_components.h1 id="hi">{"Hi"}</_components.h1>{"\n"}<_components.p>{"I am MD"}</_components.p></>;
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, _provideComponents(), props.components);
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : _createMdxContent(props);
}
export default MDXContent;
