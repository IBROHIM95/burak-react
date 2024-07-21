import React from "react"
import { TabPanel } from "@mui/lab"
import { Box, Button, Stack } from "@mui/material"


export default function FinishedOrders() {
    return (
        <TabPanel value={'3'}  >
         <Stack  marginBottom={'80px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  gap={'40px'} >
            <span></span>
            {[].map((ele,index)=> {
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
                  
                  
                 </Box>
                </Box> 
                );
            })}

            {true && (
             <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} >
               <img src="/icons/noimage-list.svg" alt=""
               style={{width:300, height:300}} />
             </Box>
            )}
         </Stack>
        </TabPanel>
    )
}