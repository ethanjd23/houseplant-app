import * as React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import login from './components/login';

const App = () => {
	return (
	  <BrowserRouter>
		<Switch>
		  <Route exact path="/login">
			<login />
		  </Route>
		</Switch>
	  </BrowserRouter>
	);
  };

export default App;
