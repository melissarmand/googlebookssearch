import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from './pages/Saved'
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Jumbotron from './components/Jumbotron'

function App() {
    return (
      <Router>
        <div>
          <Nav />
          <Jumbotron />
          <Switch>
            <Route exact path="/">
              <Search />
            </Route>
            <Route exact path="/saved">
              <Saved />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default App;