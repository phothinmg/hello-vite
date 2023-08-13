import siteData from "./siteData";
const title = document.createElement('title')
document.title= `${siteData.title}`
const iconLink = document.createElement('link')
iconLink.setAttribute('rel','icon')
iconLink.setAttribute('type',`${siteData.icontype}`)
iconLink.setAttribute('href',`${siteData.icon}`)
const desMeta = document.createElement('meta')
desMeta.setAttribute('name','keywords')
desMeta.setAttribute('content',`${siteData.keywords}`)
const authorMeta = document.createElement('meta')
authorMeta.setAttribute('name','author')
authorMeta.setAttribute('content',`${siteData.author}`)
const colorMeta = document.createElement('meta')
colorMeta.setAttribute('name','color-scheme')
colorMeta.setAttribute('content',`${siteData.theme}`)
const langMeta = document.createElement('meta')
langMeta.setAttribute('name','language')
langMeta.setAttribute('content',`${siteData.language}`)
const headElement = document.querySelector('head');
headElement.appendChild(title);
headElement.appendChild(iconLink);
headElement.appendChild(desMeta);
headElement.appendChild(authorMeta);
headElement.appendChild(colorMeta);
headElement.appendChild(langMeta);





