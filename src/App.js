import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '~src/components/Header';
import Home from '~src/pages/Home';
import TemplateEdit from '~src/pages/TemplateEdit';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Router>
          <Switch>
            <Route path="/edit/:id">
              <TemplateEdit />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
