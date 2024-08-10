import React, { useState } from 'react';

import '../css/app.css';
import {  Route, Switch, useLocation } from 'react-router-dom';
import HomePage from './screens/homePage/index';
import ProductPage from './screens/productsPage';
import OrderPage from './screens/ordersPage';
import UserPage from './screens/userPage';
import  HomeNavbar  from './components/headers/HomeNavbar';
import  OtherNavbar  from './components/headers/OtherNavbar';
import Footer  from './components/footer';
import '../css/navbar.css'
import '../css/app.css'
import '../css/footer.css'
import HelpPage from './screens/helpPage';
import { CartItem } from '../lip/types/search';
import useBasket from './hooks/useBasket';


function App() {
  const location = useLocation();

  const {cartItems, onAdd, DeleteAll,  onRemove, onDelete,} = useBasket();

  
  return (
    <>
        {location.pathname === '/' ? 
        <HomeNavbar 
         cartItems={cartItems} 
         onAdd={onAdd}
         onRemove= {onRemove}
         onDelete= {onDelete}
         DeleteAll= {DeleteAll}
         
         /> : 
        <OtherNavbar 
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove= {onRemove}
        DeleteAll= {DeleteAll}
        onDelete= {onDelete}
        />}
         <Switch>
         <Route path="/products">
            <ProductPage onAdd={onAdd} />
          </Route>
         <Route path="/orders">
            <OrderPage />
          </Route>
         <Route path="/member-page">
            <UserPage />
          </Route>
         <Route path="/help">
            <HelpPage />
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
