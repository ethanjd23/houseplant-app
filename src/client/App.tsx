import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./pages/Home";
import Register from "./components/Register";
import MyPlants from "./pages/MyPlants";
import Forum2 from "./pages/Forum2";
import Request from './pages/Request';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/forum/:userid" component={Forum2} />
        <Route exact path="/login" component={Login} />        
        <Route exact path="/register" component={Register} />
        <Route exact path="/myplants/:userid" component={MyPlants} />
        <Route exact path="/request" component={Request} />
        
      </Switch>
    </BrowserRouter>
  );
};

export default App;