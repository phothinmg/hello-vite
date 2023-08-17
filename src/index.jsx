import { render } from 'preact';
import { LocationProvider, Router, Route,} from 'preact-iso';
import { Header ,Footer} from '/components/index.js';
import  {Home}  from './pages/Home.jsx';
 import About  from './pages/About.jsx';
import { NotFound } from './pages/_404.jsx';
import '/style/main.css';


export function App() {

	return (
	  <LocationProvider>
		<Header />
		<main>
		  <Router>
			
			  <Route exact path="/" component={Home} />
			   <Route path="/about" component={About} /> 
			  <Route component={NotFound} />
			
		  </Router>
		</main>
		<hr />
		<Footer />
	  </LocationProvider>
	);
  }
  
  
  
render(<App />, document.getElementById('app'));
