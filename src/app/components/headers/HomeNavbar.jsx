import { Container, Stack,Box, Button,  } from "@mui/material";
import {NavLink} from 'react-router-dom'

export function HomeNavbar() {
    const authMember = null
    return <div className="home-navbar" > 
    
    <Container sx={{mt:'55px', height:'642px'}} >
        <Stack
        sx={{height:'55px'}}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        >
           <Box>
             <NavLink to='/' >
               <img alt="" src="/icons/burak.svg" style={{width:'125px', height:'30px'}} />
             </NavLink>
           </Box>
           <Stack
             flexDirection={'row'}
             justifyContent={'space-between'}
             minWidth={'700px'}
             alignItems={'center'}>

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
                    <Button variant="contained" style={{background: '#3776cc', color: '#f8f8ff'}}  > Login </Button>
                </Box>
            ) : (<img alt="" />) } 

           </Stack>
        </Stack>
    </Container>





 </div>
}