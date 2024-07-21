import { Box, Container, Stack } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import '../../../css/order.css'
import TabContext from "@mui/lab/TabContext";
import { SyntheticEvent, useState } from "react";
import PausedOrders from "./PauseOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";

 export default function OrderPage() {

  const [value, setValue] = useState('1');

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  }

    return (
      <div className="order-page" >
       <Container className="order-container" >
        <Stack className="order-left" >
         <TabContext value={value} >
          <Box className='order-nav-frame' >
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                className="table_list"
                >
                  <Tab label='PAUSED ORDERS' value={'1'} />
                  <Tab label='PROCESS ORDERS' value={'2'} />
                  <Tab label='FINISHED ORDERS' value={'3'} />
              </Tabs>
            </Box>
          </Box>
          <Stack>
            <PausedOrders/>
            <ProcessOrders/>
            <FinishedOrders/>
          </Stack>
         </TabContext>
        </Stack>

        <Stack className="order-right" >
          <Box className='order-info-box' >
           <Box className='member-box' >
             <div>
              <img src="/icons/default-user.svg" alt=""
                   className="order-user-avatar" />
              <div color="white" className="order-user-icon-box" >
               <img  src="/icons/user-badge.svg" alt="" />
              </div>     
             </div>
             <div>JUSTIN</div>
             <div>USER</div>
           
           </Box>
           <div className="line" ></div>
           <Box className='location' >
             <div>
              <img src="/icons/location.svg" alt="" />
             </div>
             <div style={{marginTop:'-5px'}} >DO NOT EXIST</div>
           </Box>
          </Box>
          <Box className='cards' >
            <Box className='cards-input' >
               <input placeholder="card number: 123123123" type="text" /> </Box>
            <Box sx={{display:'flex', gap:'5px'}}  className='cards-input' >
             <input placeholder="cc/mm" style={{width:'137px'}} type="text" />
             <input placeholder="07//12" style={{width:'137px' }} type="text" />
            </Box>
            <Box  className='cards-input' >
              <input placeholder="Zain" type="text" /></Box>
            <Box className='cards-icon'  >
              <img src="/icons/visa-card.svg" alt="" />
              <img src="/icons/western-card.svg" alt="" />
              <img src="/icons/paypal-card.svg" alt="" />
              <img src="/icons/master-card.svg" alt="" />
            </Box>

          </Box>
        </Stack>
       </Container>
      </div>
    )
    
  }