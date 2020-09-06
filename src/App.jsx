import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetails from './Components/PostDetails/PostDetails';


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/home">
            <Home/>
        </Route>
        <Route path="/UserPost/:postId">
          <PostDetails/>
        </Route>
        <Route path="*">
            <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
