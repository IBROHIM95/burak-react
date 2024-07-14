import { Container, Stack,Box, Button,  } from "@mui/material";
import {NavLink} from 'react-router-dom'
import Basket from "./Basket";


export default function OtherNavbar() {
    const authMember = null
    return <div className="other-navbar" >
        
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
              <NavLink to='/' >Home</NavLink>
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
            <Basket/>
            {!authMember  ? (
                <Box className= {'hover-line'} >
                    <Button variant="contained" className="login-button"  > Login </Button>
                </Box>
            ) : (<img alt=""
                className="user-avatar"
                 src={'/icons/default-user.svg'}
                 aria-haspopup= 'true'
            />) } 

           </Stack>
        </Stack>
        
    </Container>
         </div>
}