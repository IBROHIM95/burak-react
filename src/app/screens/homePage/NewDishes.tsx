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

const newDishes = [
    {productName: 'Kebab', imagePath: '/img/kebab.webp'},
    {productName: 'Kebab', imagePath: '/img/kebab-fresh.webp'},
    {productName: 'Lavash', imagePath: '/img/lavash.webp'},
    {productName: 'Cutlet', imagePath: '/img/cutlet.webp'},
    
]

export default function NewDishes() {
    return (
        <div className="new-product-frame" >
        <Container>
            <Stack className="main" >
            <Box className="category-title" >Fresh menu</Box>
            <Stack className="cards-frame" >
              <CssVarsProvider>
                {newDishes.length !== 0 ? (
                    newDishes.map((ele, index) => {
                    return (        
                 <Card key={index} variant="outlined" className="card" >
                  <CardOverflow>
                    <div className="product-sale" >Normal size</div>
                    <AspectRatio ratio='1' >
                      <img src={ele.imagePath} alt="" />
                    </AspectRatio>
                  </CardOverflow>
                  <CardOverflow variant="soft"  className="product-detail" >
                   <Stack className="info" >
                    <Stack  flexDirection={'row'}  >
                     <Typography className={'title'} >
                        {ele.productName}
                     </Typography>
                     <Divider width="2" height="24" bg="#d9d9d9" />
                     <Typography className={'price'} >$12</Typography>
                    </Stack>
                   </Stack>
                    <Typography className={'views'} >
                      20
                      <VisibilityIcon sx={{fontSize: 20, marginLeft: '5px'}} />
                    </Typography>
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