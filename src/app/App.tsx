import React from 'react';


import '../css/app.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth='sm' >
      <Stack flexDirection={'column'} >
        <Box py={{my:4}} >
          <Typography variant='h4' component={'h4'} >
            CREATE REACT APP ON TYPESCRIPT WITH REDUX
          </Typography>
        </Box>
        <Button variant='contained' >Contained</Button>
      </Stack>
      
    </Container>
  );
}

export default App;
