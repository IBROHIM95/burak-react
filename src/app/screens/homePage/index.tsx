import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import Statistics from "./Statistics";
import '../../../css/home.css'

import {  Dispatch } from "@reduxjs/toolkit";
import { Product } from "../../../lip/types/product";
import { setPopularDishes } from "./slice";
import { useDispatch } from "react-redux";
import PopularDishes from "./PopularDishes";
import ProductService from "../../service/ProductService";
import { ProductCollection } from "../../../lip/enums/product.enum";





const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});



 export default function HomePage() {
   const {setPopularDishes} = actionDispatch(useDispatch());
  

   console.log(process.env.REACT_APP_API_URL);
   
  

  useEffect(() => {
    const product = new ProductService();
    product
     .getProducts({
      page: 1,
      limit:4,
      order: 'productViews',
      productCollection: ProductCollection.DISH,
     })
     .then((data) => {
      
      
      setPopularDishes(data)
     })
     .catch((err) => console.log(err)
     )
  }, []);

  
  
    return <div className={'homepage'} >
      <Statistics/>s
      <PopularDishes/>
      <NewDishes/>
      <Advertisement/>
      <ActiveUsers/>
      <Events/>
    </div>
    
  }