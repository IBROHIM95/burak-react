import React from 'react';
import { Container } from '@mui/material';
import '../css/app.css';
import {  Route, Switch, useLocation } from 'react-router-dom';
import HomePage from './screens/homePage/index';
import ProductPage from './screens/productsPage';
import OrderPage from './screens/ordersPage';
import UserPage from './screens/userPage';
import { HomeNavbar } from './components/headers/HomeNavbar';
import { OtherNavbar } from './components/headers/OtherNavbar';
import { Footer } from './components/footer';

function App() {
  const location = useLocation();

  return (
    <>
        {location.pathname === '/' ? <HomeNavbar/> : <OtherNavbar/>}
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
        <Footer/>
    
    </>
  );
}

export default App;

// Homepage pathi '/' doim eng oxirida turishi kerak
