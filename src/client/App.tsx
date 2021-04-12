import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import PlantDetails from "./components/plantDetails";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Schedule from "./pages/Schedule";
import forumPage from "./components/EthanTestComponents/forumPage";
import ForumDetails from "./components/EthanTestComponents/ForumDetails";
import Register from "./components/Register";
import UserPlants from "./pages/UserPlants";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/forum/:userid" component={Forum} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/test/:postid" component={ForumDetails} />
        <Route exact path="/test" component={forumPage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/myplants/:userid" component={UserPlants} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;