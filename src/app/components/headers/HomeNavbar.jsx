import { Container, Stack,Box, Button,  } from "@mui/material";
import {NavLink} from 'react-router-dom'

export function HomeNavbar() {
    const authMember = null
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
        <Stack  className="header-frame" >
          <Stack className="detail" >
           <Box className="head-main-text" >World's Most Delecios Cousine</Box>    
           <Box className="wel-text" >The Choice, not just a choice</Box>    
           <Box className="service-text" >24 hours service</Box>    
           <Box className="signup" >
            {!authMember ? (
              <Button variant={'contained'} className="signup-button">
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