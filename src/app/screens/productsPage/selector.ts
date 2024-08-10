//selector configratsiyasi
import { createSelector } from "@reduxjs/toolkit"
import { AppRootState } from "../../../lip/types/screen"
                           // bu arrow function, AppRootStatening ichidagi productpage stateni qo'lga oldik
const selectProductPage = (state: AppRootState) => state.productPage;

export const retrieveRestaurant = createSelector(
    selectProductPage,
     (ProductsPage) => ProductsPage.restaurant  //productPage interfacening restaran valuesini oldik
)
export const retrieveChosenProduct= createSelector(
    selectProductPage,
     (ProductsPage) => ProductsPage.chosenProduct
)
export const retrieveProducts = createSelector(
    selectProductPage,
     (ProductsPage) => ProductsPage.products
)