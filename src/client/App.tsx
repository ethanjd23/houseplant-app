import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import PlantDetails from "./components/plantDetails";
import Home from "./pages/Home";
// import Forum from "./pages/Forum";
import Schedule from "./pages/Schedule";
import forumPage from "./components/EthanTestComponents/forumPage";
import ForumDetails from "./components/EthanTestComponents/ForumDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/forum" component={Forum} /> */}
        <Route path="/schedule" component={Schedule} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/test/:postid" component={ForumDetails} />
        <Route exact path="/test" component={forumPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;