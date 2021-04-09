import * as React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import login from './components/login';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Schedule from './pages/Schedule';
import Request from './pages/Request';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import HomeHeader from './components/Header';
import HomePlantInfo from './components/HomePlantInfo';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/forum' component={Forum} />
				<Route path='/schedule' component={Schedule} />
				<Route path='/request' component={Request} />
				<Route exact path="/login">

				</Route>
			</Switch>
		</BrowserRouter>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
	  minHeight: '100vh',
	  backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/homepic3.jpg'})`,
	  backgroundRepeat: 'no-repeat',
	  backgroundSize: 'cover',
	},
  }));

  export default function App() {
	const classes = useStyles();
	return (
	  <div className={classes.root}>
		<CssBaseline />
		<HomeHeader />
		<HomePlantInfo />
	  </div>
	);
  }

export default App;
