import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { Header ,Footer} from '/components/index.js';
import  {Home}  from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import '/style/simple.css';
import '/style/prism/prism -v2.css';
import '/style/prism/prism -v2.js';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route default component={NotFound} />
				</Router>
			</main>
			<hr></hr>
			<Footer/>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
