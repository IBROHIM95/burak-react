import React from 'react';

import { Container } from '@mui/material';
import '../css/app.css';

import { Link, Route, Switch } from 'react-router-dom';

import HomePage from './screens/homePage/index';
import ProductPage from './screens/productsPage';
import OrderPage from './screens/ordersPage';
import UserPage from './screens/userPage';

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
              <Link to="/products">ProductsPage</Link>
            </li>
            <li>
              <Link to="/orders">OrdersPage</Link>
            </li>
            <li>
              <Link to="/member-page">UserPage</Link>
            </li>
          </ul>
        </nav>

         <Switch>
         <Route path="/products">
            <ProductPage />
          </Route>
         <Route path="/orders">
            <OrderPage />
          </Route>
         <Route path="/member-page">
            <UserPage />
          </Route>
          <Route path="/">
            <HomePage />   
          </Route>
        </Switch>
      </div>
    
    </div>
  );
}

export default App;

// Homepage pathi '/' doim eng oxirida turishi kerak
