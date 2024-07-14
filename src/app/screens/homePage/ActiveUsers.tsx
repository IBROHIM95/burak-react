
import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CardOverflow from '@mui/joy/CardOverflow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { AspectRatio } from "@mui/joy";
import Divider from "../../components/divider";





const activeUsers = [
    {memberNick: 'Martin', memberImage: '/img/martin.webp'},
    {memberNick: 'Justin', memberImage: '/img/justin.webp'},
    {memberNick: 'Rose', memberImage: '/img/rose.webp'},
    {memberNick: 'Nusret', memberImage: '/img/nusret.webp'},
    
]


export default function ActiveUsers() {
    return (
      <div  className={'active-users-frame'} >
       <Container sx={{backgroundSize:'contain'}}>
       <Stack className="main" >
            <Box className="category-title" >Active Users</Box>
            <Stack className="cards-frame" >
              <CssVarsProvider>
                {activeUsers.length !== 0 ? (
                    activeUsers.map((ele, index) => {
                    return (        
                 <Card key={index} variant="outlined"  >
                  <CardOverflow  >
                  <Stack  className="card">
                     <AspectRatio  ratio='1' >
                      <img height={'270px'} width={'290px'}   src={ele.memberImage} alt="" />
                    
                    </AspectRatio>
                  </Stack>
                   
                  </CardOverflow>
                  <CardOverflow variant="soft"  className="product-detail" >
                   
                    <Stack  className={'member-nickname'}  >
                     <Typography fontSize={'12px'}   >
                        {ele.memberNick}
                     </Typography>
                     
                    </Stack>  
                   
                    
                  </CardOverflow>
                 </Card>
    
                    )
                })
                ): <Box className='no-data' >New products not aviabale!</Box>}
                 
                </CssVarsProvider>
                
                
               
    </Stack>
     </Stack>
       </Container>
  
    
      </div>  
    )
}