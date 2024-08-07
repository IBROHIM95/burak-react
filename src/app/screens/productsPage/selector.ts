import { createSelector } from "@reduxjs/toolkit"
import { AppRootState } from "../../../lip/types/screen"

const selectProductPage = (state: AppRootState) => state.productPage;

export const retrieveRestaurant = createSelector(
    selectProductPage,
     (ProductsPage) => ProductsPage.restaurant
)
export const retrieveChosenProduct= createSelector(
    selectProductPage,
     (ProductsPage) => ProductsPage.chosenProduct
)
export const retrieveProducts = createSelector(
    selectProductPage,
     (ProductsPage) => ProductsPage.products
)