import './index.css';
import Home from './Home';
import React, { Component }  from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
function App() {
  return (
    
    <Router>
      
    <div className="App">
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>


          <Route path="/create">
            <Create/>
          </Route>

        </Switch>
    
    </div>
    </Router>
  );
}

export default App;
