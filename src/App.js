import './index.css';
import Home from './Home';
import React, { Component }  from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import Header from './header';
import BlogDetails from './BlogDetails';
function App() {
  return (
    
    <Router>
      <Header/>
    <div className="App">
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>


          <Route path="/create">
            <Create/>
          </Route>

        <Route path="/blogs/:id">
          <BlogDetails/>
        </Route>

        </Switch>
    
    </div>
    </Router>
  );
}

export default App;
