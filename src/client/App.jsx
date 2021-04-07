import * as React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import login from './components/login';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Schedule from './pages/Schedule';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/forum' component={Forum} />
				<Route path='/schedule' component={Schedule} />
				<Route exact path="/login">

				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
