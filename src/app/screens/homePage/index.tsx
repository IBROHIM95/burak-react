import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import Statistics from "./Statistics";
import '../../../css/home.css'
import {  Dispatch } from "@reduxjs/toolkit";
import {createSelector,} from 'reselect'
import { Product } from "../../../lip/types/product";
import { setPopularDishes } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { retrievePopularDishes } from "./selector";
import PopularDishes from "./PopularDishes";





const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({popularDishes})
)


 export default function HomePage() {
  //  const {setPopularDishes} = actionDispatch(useDispatch());
  //  const {popularDishes} = useSelector(popularDishesRetriever);

   console.log(process.env.REACT_APP_API_URL);
   
  

  useEffect(() => {}, [] );

  
  
    return <div className={'homepage'} >
      <Statistics/>s
      <PopularDishes/>
      <NewDishes/>
      <Advertisement/>
      <ActiveUsers/>
      <Events/>
    </div>
    
  }