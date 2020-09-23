import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import Search from "./Search";
import Results from "./Results";
import Results2 from "./Results2";
import { Layout } from "./components/Layout.js";
import { NavigationBar } from "./components/NavigationBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/results" component={Results} />
              <Route path="/results2" component={Results2} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
