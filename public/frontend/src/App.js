import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from './scenes/public/NotFound';
import Home from './scenes/public/Home';

const App = () => (
	<Switch>
		<Route exact path='/' component={ Home } />
		<Route path="*" component={ NotFound } />
	</Switch>
)

export default App;
