import siteData from "../script-lib/siteData";
import { IconBrandGithub } from "@tabler/icons-preact";

function GithubIcon(props) {
    return(
        <a href={siteData.github} target={'_blank'}>
            <IconBrandGithub 
                size = {props.size == undefined ? props.size: 24}
                color = {props.color == undefined ? props.color:'currentColor'}
                stroke = {props.stroke == undefined ? props.stroke: 2}
            />
        </a>
    )
};

export {GithubIcon}