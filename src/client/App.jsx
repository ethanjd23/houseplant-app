import * as React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import login from './components/login';
import forum from './components/forum';
import Forum from './pages/Forum';
import Home from './pages/Home';
import Schedule from './pages/Schedule';

const App = () => {
	return (
	  <BrowserRouter>
		<Switch>
		  <Route exact path="/login">
			<login />
		  </Route>
		  <Route exact path="/forum">
			<forum />
		  </Route>
		  <Route exact path="/Forum">
			  <Forum />
		  </Route>
		  <Route exact path="/Home">
			  <Home />
		  </Route>
		  <Route exact path="/Schedule">
			  <Schedule />
		  </Route>
		</Switch>
	  </BrowserRouter>
	);
  };

export default App;
