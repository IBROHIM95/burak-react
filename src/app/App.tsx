import React from 'react';

import { Container } from '@mui/material';
import '../css/app.css';

import { Link, Route, Router, Switch } from 'react-router-dom';
import About from './screens/About';
import Users from './screens/Users';
import Home from './screens/Home';

function App() {
  return (
    <div>
      
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    
    </div>
  );
}

export default App;
