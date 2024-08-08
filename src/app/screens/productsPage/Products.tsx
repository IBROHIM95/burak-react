import React, { ChangeEvent, useEffect, useState } from 'react'
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
import { Product, ProductInquery } from "../../../lip/types/product";
import {  Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setProducts } from './slice';
import ProductService from '../../service/ProductService';
import { ProductCollection } from '../../../lip/enums/product.enum';
import { serverApi } from '../../../lip/config';
import { useHistory } from 'react-router-dom';

const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch( setProducts(data)),  
});
const productRetriever = createSelector(retrieveProducts, (products) => ({
  products
}) )


export default function  Products() {
  const {setProducts} = actionDispatch(useDispatch());
  const {products} = useSelector(productRetriever);
  const [productSearch, setProductSearch] = useState<ProductInquery>({
      page: 1,
      limit: 2,
      order: 'createdAt',
      productCollection: ProductCollection.DISH,
      search: "",
  })

  const [searchText, setSearchText] = useState<string>("");
  const history = useHistory();

  useEffect(() => {
    const product = new ProductService();
    product
    .getProducts(productSearch)
    .then((data)=> setProducts(data))
    .catch((err) => console.log(err))
  }, [productSearch]);

  useEffect(() => {
   if(searchText === "") {
    productSearch.search = "";
    setProductSearch({...productSearch})
   }
  }, [ searchText])

  /**  HANDLERS  **/

  const searchCollectionHandler = (collection: ProductCollection) => {
    productSearch.page = 1;
    productSearch.productCollection = collection;
    setProductSearch({...productSearch})
  };

  const searchOrderHandler = (order: string) => {
    productSearch.page = 1;
    productSearch.order = order;
    setProductSearch({...productSearch})
  }

  const searchProductHandler = () => {
    
    productSearch.search = searchText;
    console.log('search',productSearch?.search);
    setProductSearch({...productSearch})
   
    
  }

  const paginationHandler = (e: ChangeEvent<any>, value: number) => {
  productSearch.page = value;
  setProductSearch({...productSearch})
  }

  const chooseDishHandler = (_id: string) => {
   history.push(`/products/${_id}`)
   
  }
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
                     name={"singleResearch"}
                     placeholder="Type here"
                     inputProps={{ 'aria-label': 'Type here' }}
                     type='search'
                     value={searchText}
                     onChange={(e) => {
                     setSearchText(e.target.value) 
                     }}
                     onKeyDown={(e) => {
                      if(e.key === 'Enter') searchProductHandler()
                        console.log('enter');
                        
                     }}
                     />
                     <Stack className='search-part' color='secondary'  flexDirection={'row'}  alignItems={'center'} >
                        <Box paddingLeft={'5px'} color='#d7b586' >SEARCH</Box>
                        <Box  >
                        <Button 
                        endIcon= {<SearchIcon sx={{    color: 20 ? '#d7b586' : 'white',}} />}
            
                        sx={{position:'relative', height: '30px'}}  
                        aria-label="earch"
                        onClick={searchProductHandler}    
                        >
              
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
                    color= {
                      productSearch.order === "createdAt" ? "primary" : "secondary"
                    }
                    className='order'
                    onClick={() => searchOrderHandler("createdAt")} >
                    New
                  </Button>
                  <Button 
                    variant='contained'
                    className='order' 
                    color= {
                      productSearch.order === "productPrice" ? "primary" : "secondary"
                    }
                    onClick={() => searchOrderHandler("productPrice")}
                    >
                    Price
                  </Button>
                  <Button 
                    variant='contained'
                    color= {
                      productSearch.order === "productViews" ? "primary" : "secondary"
                    }
                    onClick={() => searchOrderHandler("productViews")}
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
                            <Stack key={product._id} className={'product-card'} 
                             onClick={() => chooseDishHandler(product._id)} >
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
                <Stack  className={'dishes-filter-box2'} >
                  <Button 
                    variant='contained'
                    color={
                      productSearch.productCollection === ProductCollection.OTHER
                        ? "primary"
                        : "secondary"
                    }
                    className='order'
                    onClick={() => searchCollectionHandler(ProductCollection.OTHER)} >
                    OTHER
                  </Button>
                  <Button 
                    variant='contained'
                    color={
                      productSearch.productCollection === ProductCollection.DESSERT
                        ? "primary"
                        : "secondary"
                    }
                    className='order'
                    onClick={() => searchCollectionHandler(ProductCollection.DESSERT)} >
                    DESSERT
                  </Button>
                  <Button 
                    variant='contained'
                    color={
                      productSearch.productCollection === ProductCollection.DRINK
                        ? "primary"
                        : "secondary"
                    }
                    className='order'
                    onClick={() => searchCollectionHandler(ProductCollection.DRINK)} >
                    DRINK
                  </Button>
                  <Button 
                    variant='contained'
                    color={
                      productSearch.productCollection === ProductCollection.SALAD
                        ? "primary"
                        : "secondary"
                    }
                    className='order'
                    onClick={() => searchCollectionHandler(ProductCollection.SALAD)} >
                    SALAD
                  </Button>
                  <Button 
                    variant='contained'
                    color={
                      productSearch.productCollection === ProductCollection.DISH
                        ? "primary"
                        : "secondary"
                    }
                    className='order'
                    onClick={() => searchCollectionHandler(ProductCollection.DISH)} >
                    DISH
                  </Button>
                </Stack>
               </Stack>

               <Stack  className={'paginatio-section'} >
                <Pagination
                  count={
                    products.length !== 0
                    ? productSearch.page + 1
                    : productSearch.page
                  }
                  page={productSearch.page}
                  renderItem={(item)=> (
                    <PaginationItem 
                      components={{
                        previous: ArrowBackIos,
                        next: ArrowForwardIos,
                      }} 
                      {...item}
                      color={'secondary'}/>
                   )}
                   onChange={paginationHandler}/>
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
