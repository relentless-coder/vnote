import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import PageContainer from './containers/Page';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/pages">
            <PageContainer />
          </Route>
          <Route path="/notebooks">
            <h2>Here you'll find your notebooks</h2>
          </Route>
          <Route path="/">
            <h1>Welcome To Notebooks</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
