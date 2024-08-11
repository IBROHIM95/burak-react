import React, { useState } from 'react';
import {  Route, Switch, useLocation } from 'react-router-dom';
import HomePage from './screens/homePage/index';
import ProductPage from './screens/productsPage';
import OrderPage from './screens/ordersPage';
import UserPage from './screens/userPage';
import  HomeNavbar  from './components/headers/HomeNavbar';
import  OtherNavbar  from './components/headers/OtherNavbar';
import Footer  from './components/footer';
import HelpPage from './screens/helpPage';
import { CartItem } from '../lip/types/search';
import useBasket from './hooks/useBasket';
import '../css/navbar.css'
import '../css/app.css'
import '../css/footer.css'
import AuthenticationModal from './components/auth';
import { T } from '../lip/types/common';
import { sweetErrorHandling, sweetTopSuccessAlert } from '../lip/sweetAlert';
import { Messages } from '../lip/config';
import MemberService from './service/MemberService';
import { useGlobal } from './hooks/useGlobals';

function App() {
  const location = useLocation();

  const{setAuthMember} = useGlobal()
  const {cartItems, onAdd, DeleteAll,  onRemove, onDelete,} = useBasket();
  const [signupOpen, SetSignupOpen] = useState<boolean>(false)
  const [loginOpen, SetlLoginOpen] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  
  //HANDLERS

  const handleSignupClose = () => SetSignupOpen(false)
  const handleLoginClose = () => SetlLoginOpen(false)
  const handLogoutClick = (e:React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget)
  };
  const handCloseLogout = () => setAnchorEl(null)
  const handlLoguotRequest = async () => {
    try{

      const member = new MemberService()
      await member.logout();

      await sweetTopSuccessAlert("success", 1100)
      setAuthMember(null)
    }catch(err){
      console.log(err);
      sweetErrorHandling(Messages.error1)
      
    }
  } 
    
  
  
  
  return (
    <>
        {location.pathname === '/' ? 
        <HomeNavbar 
         cartItems={cartItems} 
         onAdd={onAdd}
         onRemove= {onRemove}
         onDelete= {onDelete}
         DeleteAll= {DeleteAll}
         SetSignupOpen={SetSignupOpen}
         SetlLoginOpen={SetlLoginOpen}
         anchorEl={anchorEl}
         handLogoutClick={handLogoutClick}
         handCloseLogout={handCloseLogout}
         handlLoguotRequest={handlLoguotRequest}
         /> : 
        <OtherNavbar 
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove= {onRemove}
        DeleteAll= {DeleteAll}
        onDelete= {onDelete}
        SetlLoginOpen={SetlLoginOpen}
        anchorEl={anchorEl}
        handLogoutClick={handLogoutClick}
        handCloseLogout={handCloseLogout}
        handlLoguotRequest={handlLoguotRequest}
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
    
        <AuthenticationModal
          signupOpen={signupOpen}
          loginOpen={loginOpen}
          handleSignupClose={handleSignupClose}
          handleLoginClose={handleLoginClose}
          />
    </>
  );
}

export default App;

// Homepage pathi '/' doim eng oxirida turishi kerak
