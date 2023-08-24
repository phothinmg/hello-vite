
import {ThemeSelect} from './index';
import navBarLink from '../lib/navBarLink';

export default function Header() {

	return (
	  <div className={'top'}>
		 <header>
			<nav>
				<div className={'nav'}>
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

			</nav>
		</header>
	  </div>
		
	);
}
