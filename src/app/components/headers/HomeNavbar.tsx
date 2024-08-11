import { Container, Stack,Box, Button, MenuItem, Menu, ListItemIcon,  } from "@mui/material";
import {NavLink} from 'react-router-dom'
import Basket from "./Basket";
import React, { useEffect, useState } from "react";
import { CartItem } from "../../../lip/types/search";
import { useGlobal } from "../../hooks/useGlobals";
import { serverApi } from "../../../lip/config";
import { Logout } from "@mui/icons-material";

interface HomeNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void
 onRemove: (item: CartItem) => void
 onDelete: (item: CartItem) => void
 DeleteAll: () => void
 SetSignupOpen: (isOpen: boolean) => void
 SetlLoginOpen:  (isOpen: boolean) => void
 handLogoutClick: (e: React.MouseEvent<HTMLElement>) => void
 anchorEl: HTMLElement | null;
 handCloseLogout: ()=> void;
 handlLoguotRequest: () => void
}


export default function HomeNavbar(props: HomeNavbarProps) {
  const {
    cartItems,
     onAdd,
     SetlLoginOpen,
     SetSignupOpen,
     onRemove, 
     DeleteAll, 
     onDelete,
     handLogoutClick,
     handlLoguotRequest,
     anchorEl,
     handCloseLogout,} =props
  const {authMember} = useGlobal()
    
    
    return <div className="home-navbar" > 
    
    <Container className="navbar-container" >
        <Stack className="menu"
        >
           <Box>
             <NavLink to='/' >
               <img className="brand-logo" alt="" src="/icons/burak.svg" style={{width:'125px', height:'30px'}} />
             </NavLink>
           </Box>
           <Stack className="links" >

            <Box className= {'hover-line'} >
              <NavLink activeClassName={'underline'} to='/' >Home</NavLink>
            </Box>    
            <Box className= {'hover-line'} >
              <NavLink activeClassName={'underline'} to='/products' >Products</NavLink>
            </Box>   
            {authMember ? (
               <Box className= {'hover-line'} >
               <NavLink activeClassName={'underline'} to='/orders' >Orders</NavLink>
             </Box>   
            ) : null } 
            {authMember ? (
               <Box className= {'hover-line'} >
               <NavLink activeClassName={'underline'} to='/member-page' >My page</NavLink>
             </Box>   
            ) : null } 
            <Box className= {'hover-line'} >
              <NavLink activeClassName={'underline'} to='/help' >Help</NavLink>
            </Box>   
            <Basket 
             cartItems={cartItems}
             onAdd={onAdd}
             onRemove= {onRemove}
             DeleteAll= {DeleteAll}
             onDelete= {onDelete}  />
            {!authMember  ? (
                <Box className= {'hover-line'} >
                    <Button variant="contained" className="login-button"
                    onClick={() => SetlLoginOpen(true) }  > Login </Button>
                </Box>
            ) : (<img alt=""
                className="user-avatar"
                 src={
                  authMember?.memberImage
                  ? `${serverApi}/${authMember?.memberImage}`
                  : '/icons/default-user.svg'}
                 
                 aria-haspopup= 'true'
                 onClick={handLogoutClick}
            />) } 

<Menu
anchorEl={anchorEl}
	id="account-menu"
  open={Boolean(anchorEl)}
  onClose={handCloseLogout}
  onClick={handCloseLogout}
	PaperProps={{
		elevation: 0,
		sx: {
			overflow: 'visible',
			filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
			mt: 1.5,
			'& .MuiAvatar-root': {
				width: 32,
				height: 32,
				ml: -0.5,
				mr: 1,
			},
			'&:before': {
				content: '""',
				display: 'block',
				position: 'absolute',
				top: 0,
				right: 14,
				width: 10,
				height: 10,
				bgcolor: 'background.paper',
				transform: 'translateY(-50%) rotate(45deg)',
				zIndex: 0,
			},
		},
	}}
	transformOrigin={{ horizontal: 'right', vertical: 'top' }}
	anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
>
	<MenuItem onClick={handlLoguotRequest}>
		<ListItemIcon>
			<Logout fontSize="small" style={{ color: 'blue' }} />
		</ListItemIcon>
		Logout
	</MenuItem>
</Menu>

           </Stack>
        </Stack>
        <Stack  className="header-frame" >
          <Stack className="detail" >
           <Box className="head-main-text" >World's Most Delecios Cousine</Box>    
           <Box className="wel-text" >The Choice, not just a choice</Box>    
           <Box className="service-text" > hours service</Box>    
           <Box className="signup" >
            {!authMember ? (
              <Button variant={'contained'} className="signup-button"  
              onClick={() => SetSignupOpen(true)} >
                SIGN UP        
              </Button>
            ) : null }
          </Box>    
         </Stack>
          <Box className='logo-frame' >
            <div  className='logo-img' ></div>
          </Box>
        </Stack>
    </Container>





 </div>
}