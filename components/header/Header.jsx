import './header.css';
import {Themechange} from '../index';
import navBarLink from '../../lib/navBarLink';

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
						<Themechange/>
					</div>
				</div>
				
				<hr></hr>
			</nav>
		</header>
	);
}
