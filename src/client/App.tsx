import * as React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/login';
import PlantDetails from './components/plantDetails'

const App = () => {
	return (
	  <BrowserRouter>
		<Switch>
			<Route exact path='/'>
				<h1>HELP</h1>
			</Route>
		  <Route exact path="/login">
			<Login />
		  </Route>
		  <Route exact path="/plantdetails">
			  <PlantDetails />
		  </Route>
		</Switch>
	  </BrowserRouter>
	);
  };

export default App;
