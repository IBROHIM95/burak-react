import React, { useEffect } from 'react'
import  MonetizationEyeIcon  from '@mui/icons-material/MonetizationOn'
import  RemoveRedEyeIcon  from '@mui/icons-material/RemoveRedEye'
import { Badge, Box, Button, Container, Pagination, PaginationItem, Stack } from '@mui/material'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product } from "../../../lip/types/product";
import {  Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setProducts } from './slice';
import ProductService from '../../service/ProductService';
import { ProductCollection } from '../../../lip/enums/product.enum';
import { serverApi } from '../../../lip/config';

const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch( setProducts(data)),  
});
const productRetriever = createSelector(retrieveProducts, (products) => ({
  products
}) )


export default function  Products() {
  const {setProducts} = actionDispatch(useDispatch());
  const {products} = useSelector(productRetriever)

  useEffect(() => {
    const product = new ProductService();
    product.getProducts({
      page: 1,
      limit: 8,
      order: 'createdAt',
      productCollection: ProductCollection.DISH,
      search: '',
    })
    .then((data)=> setProducts(data))
    .catch((err) => console.log(err))
  })
    return (
        <div  className='products' >
          <Container>
            <Stack flexDirection={'column'} alignItems={'center'}  >

               <Stack className={'avatar-big-box'} > 
                  <Box className={'top-text'}  >Burak Restaurant</Box> 
                  <Stack className='search' >
                  <Paper 
                    component="form"
                    sx={{ p: '2px 4px',height:'30px', display: 'flex', alignItems: 'center', justifyContent:'space-around',  borderRadius: '130px' }}
                    >
                    <Stack alignItems={'start'} flexDirection={'row'} >
                    <InputBase
                     sx={{ ml: 1, flex: 1, }}
                     placeholder="Type here"
                     inputProps={{ 'aria-label': 'Type here' }}
                     />
                     <Stack className='search-part' color='secondary'  flexDirection={'row'}  alignItems={'center'} >
                        <Box paddingLeft={'5px'} color='#d7b586' >SEARCH</Box>
                        <Box  >
                        <Button   sx={{position:'relative', height: '30px'}}  aria-label="search">
                        <SearchIcon sx={{
                                            color: 20 ? '#d7b586' : 'white',
                                          }} />
                        </Button>      
                        </Box>
                    
                     </Stack>    
                    </Stack>    
                  </Paper>
                  </Stack>

                  

               </Stack>

               <Stack  className={'dishes-filter-section'} >
                <Stack className={'dishes-filter-box'} >
                  <Button 
                    variant='contained'
                    color='primary'
                    className='order' >
                    New
                  </Button>
                  <Button 
                    variant='contained'
                    color='primary'
                    className='order' >
                    Price
                  </Button>
                  <Button 
                    variant='contained'
                    color='primary'
                    className='order' >
                    Views
                  </Button>
                </Stack>
               </Stack>

               <Stack  className={'list-category-section'} >
                <Stack className={'product-wrapper'} >
                  {products.length !== 0 ? (
                    products.map((product: Product) => {
                      const imagePath = `${serverApi}/${product.productImage[0]}`
                      const sizeVolume = product.productCollection === ProductCollection.DISH
                        ? product.productVolume + 'litre'
                        : product.productSize + 'size'
                        return (
                            <Stack key={product._id} className='product-card' >
                             <Stack className='product-img'
                                    sx={{backgroundImage: `url(${imagePath})`}}  
                                     >
                                    <div className='product-sale' >{sizeVolume} </div>
                                    <Button className={'shop-btn'} >
                                       <img alt='' src={'icons/shopping-cart.svg'}
                                            style={{display:'flex'}} />
                                    </Button>
                                    <Button className={'view-btn'} sx={{right:'36px'}} >
                                      <Badge badgeContent={product.productViews} color='primary'  >
                                        <RemoveRedEyeIcon
                                          sx={{
                                            color: product.productViews === 0 ? 'gray' : 'white',
                                          }}  />
                                      </Badge>
                                    </Button>
                             </Stack>
                             <Box className={'product-desc'} >
                               <span className={'product-title'} >
                                {product.productName}
                               </span>
                               <div style={{ display:'flex', flexDirection: 'row'}}  className={'product-desc'} >
                                <MonetizationEyeIcon  />
                                          {product.productPrice}
                                  <div style={{color:'#d7b586'}} ></div>
                               </div>
                             </Box>
                            </Stack>
                        )
                    })
                  ): <Box className= {'no-data'} > Products are not aviable </Box>}
                </Stack>
                <Stack className={'dishes-filter-box'} >
                  <Button 
                    variant='contained'
                    color='primary'
                    className='order' >
                    OTHER
                  </Button>
                  <Button 
                    variant='contained'
                    color='primary'
                    className='order' >
                    DESSERT
                  </Button>
                  <Button 
                    variant='contained'
                    color='primary'
                    className='order' >
                    DRINK
                  </Button>
                  <Button 
                    variant='contained'
                    color='primary'
                    className='order' >
                    SALAD
                  </Button>
                  <Button 
                    variant='contained'
                    color='primary'
                    className='order' >
                    DISH
                  </Button>
                </Stack>
               </Stack>

               <Stack  className={'paginatio-section'} >
                <Pagination
                  count={3}
                  page={1}
                  renderItem={(item)=> (
                    <PaginationItem 
                      components={{
                        previous: ArrowBackIos,
                        next: ArrowForwardIos,
                      }} 
                      {...item}
                      color={'secondary'}/>
    )}/>
               </Stack>
            </Stack>
            
          </Container>

          <div className={'brands-logo'} >
            <Container>
                <Stack marginTop={'50px'}  >Our Family Brands</Stack>
                <Stack className={'brands-logo-collect'}    >
                    <Box  >
                        <img className='brands-logo-img' style={{display: 'flex'}} src="img/seafood.webp" alt="" />
                    </Box>
                    <Box  >
                        <img className='brands-logo-img' style={{display: 'flex'}} src="img/seafood.webp" alt="" />
                    </Box>
                    <Box  >
                        <img className='brands-logo-img' style={{display: 'flex'}} src="img/seafood.webp" alt="" />
                    </Box>
                    <Box  >
                        <img className='brands-logo-img' style={{display: 'flex'}} src="img/seafood.webp" alt="" />
                    </Box>
                  
                </Stack>
            </Container>
          </div>

          
          <div className={'address'} >
            <Container>
                <Stack className='addres-area' >
                    <Box className={'title'} >Our adress</Box>
                    
                    <iframe
                     title="This is a unique title"
                      style={{marginTop: '60px'}}
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019135653208!2d-122.08424938467808!3d37.42199997982218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24cd6e5ef8d%3A0x91a0cb3c1b6e8e15!2sGoogleplex!5e0!3m2!1sen!2sus!4v1539384152560'
                      width='1320'
                      height='500'
                      referrerPolicy='no-referrer-when-downgrade'>
                    </iframe>

                </Stack>
            </Container>
          </div>
        </div>
    )
}
