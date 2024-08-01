import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import '../../../css/home.css'


 export default function HomePage() {

  //Selector:Store => Data

  useEffect(() => {
     // Backend server data request => Data
     // Slice: Data => Store
  }, [] )
    return <div className={'homepage'} >
      <Statistics/>s
      <PopularDishes/>
      <NewDishes/>
      <Advertisement/>
      <ActiveUsers/>
      <Events/>
    </div>
    
  }