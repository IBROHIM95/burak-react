import React from 'react';


import '../css/app.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { RippleBadge } from './MaterialTheme/styled';

function App() {
  return (
    <Container sx={{background: 'orange'}} >
      <Stack flexDirection={'column'} >
        <Box py={{my:4}} >
          <Typography variant='h4' component={'h4'} >
            CREATE REACT APP ON TYPESCRIPT WITH REDUX
          </Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent={4} >
            <Button variant='contained' >Contained</Button>
          </RippleBadge>
        </Box>
        
      </Stack>
      
    </Container>
  );
}

export default App;
