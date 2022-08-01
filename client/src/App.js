import './App.css';
import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import LandingPage from './components/Landing/LandingPage';
import Home from './components/Home';
import Details from './components/Home/Details';
import Form from './components/Home/Form'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/countries/:id" component={Details} />
          <Route path={"/activities"} component={Form} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
