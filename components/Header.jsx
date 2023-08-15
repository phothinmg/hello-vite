
import {ThemeSelect} from './index';
import navBarLink from '../libary/navBarLink';

export default function Header() {

	return (
		<header>
			<nav>
				<div className="nav">
					<div className="nav-l">
							{navBarLink.map((link) =>(
							<a
							key={link.title}
							href={link.href}
							>
								{link.title}
							</a>
						))}
					</div>
					<div className="nav-r">
						<ThemeSelect/>
					</div>
				</div>
				
				<hr></hr>
			</nav>
		</header>
	);
}
