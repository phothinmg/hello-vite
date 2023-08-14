import siteData from "/lib/siteData";
import './footer.css';
import { GithubIcon } from "..";

export default function (){
    return(
        <footer>
        <div className={'footer'}>
            <div className={'footer-l'}>
                ©  {new Date().getFullYear()} <a href={'/'} style={{textDecoration:'none'}}>{siteData.title}</a>
            </div>
            <div className={'footer-c'}></div>
            <div className={'footer-r'}>
                <GithubIcon
                 size={48}
                />
            </div>
        </div>
        </footer>
    )
}