
import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import CardOverflow from '@mui/joy/CardOverflow';
import { AspectRatio } from "@mui/joy";


import {createSelector,} from 'reselect'
import {  useSelector } from "react-redux";
import { retrievePopularDishes } from "./selector";
import { serverApi } from "../../../lip/config";
import { Member } from "../../../lip/types/member";






const topUsersRetriever = createSelector(
  retrievePopularDishes,
  (topUsers) => ({topUsers})
)




export default function ActiveUsers() {
  const {topUsers} = useSelector(topUsersRetriever)
    return (
      <div  className={'active-users-frame'} >
       <Container sx={{backgroundSize:'contain'}}>
       <Stack className="main" >
            <Box className="category-title" >Active Users</Box>
            <Stack className="cards-frame" >
              <CssVarsProvider>
                {topUsers.length !== 0 ? (
                    topUsers.map((member: Member) => {
                      const imagePath = `${serverApi}/${member.memberImage}`
                    return (        
                 <Card key={member._id  } variant="outlined"  >
                  <CardOverflow  >
                  <Stack  className="card">
                     <AspectRatio  ratio='1' >
                      <img height={'270px'} width={'290px'}   src={imagePath} alt="" />
                    
                    </AspectRatio>
                  </Stack>
                   
                  </CardOverflow>
                  <CardOverflow variant="soft"  className="product-detail" >
                   
                    <Stack  className={'member-nickname'}  >
                     <Typography fontSize={'12px'}   >
                        {member.memberNick}
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