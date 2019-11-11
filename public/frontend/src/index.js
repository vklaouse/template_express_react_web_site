import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import ScrollToTop from './components/tools/ScrollToTop'
import * as serviceWorker from './services/serviceWorker';

ReactDOM.render(
	<BrowserRouter>
		<ScrollToTop>
			<App/>
		</ScrollToTop>
	</BrowserRouter>,
	document.getElementById('root')
);
serviceWorker.register();
