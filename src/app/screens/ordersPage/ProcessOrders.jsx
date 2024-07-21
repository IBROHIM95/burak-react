import React from "react"
import { TabPanel } from "@mui/lab"
import { Box, Button, Stack } from "@mui/material"
import moment from "moment"


export default function ProcessOrders() {
    return (
        <TabPanel value={'2'}  >
         <Stack  marginBottom={'80px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  gap={'40px'} >
            <span></span>
            {[1, 2].map((ele,index)=> {
             return (
                <Box key={index} className='order-main-box' >
                 
                    {[1, 2].map((ele2, index2) => {
                        return (
                        <Box className='order-box-scroll' >
                         <Box display={'flex'} alignItems={'center'}  flexDirection={'row'} gap={'10px'} >
                           <img src="/img/kebab.webp" 
                                alt=""
                                className="order-dish-img" /> 
                            <p className="title-dish" >Kebab</p>
                            </Box>
                            <Box display={'flex'} flexDirection={'row'} gap={'10px'} >
                                <p>$11</p>
                                <img src="/icons/close.svg" alt="" />
                                <p>2</p>
                                <img src="/icons/pause.svg" alt="" />
                                <p style={{marginLeft:'15px'}} >$22</p>
                            </Box>    
                         
                         </Box >
                        );
                    })}
                    
                 

                 <Box className='total-price-box' >
                  <Box className='box-total' >
                    <p>Product price</p>
                    <p>$22</p>
                    <img src="/icons/plus.svg"  alt="" />
                    <p>delivery cost</p>
                    <p>$2</p>
                    <img src="/icons/pause.svg"  alt="" />
                    <p>Total</p>
                    <p>$24</p>
                  </Box>
                  <p className="data-compl" >
                    {moment().format('YY-MM-DD HH:mm')}
                  </p>
                  <Button sx={{background:'rgba(50, 165, 232, 0.976)'}} variant="contained"  className="verify-button" >
                     Verify to fulfil 
                  </Button> 
                 </Box>
                </Box> 
                );
            })}

            {false && (
             <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} >
               <img src="/icons/noimage-list.svg" alt=""
               style={{width:300, height:300}} />
             </Box>
            )}
         </Stack>
        </TabPanel>
    )
}