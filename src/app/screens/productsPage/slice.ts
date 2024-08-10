//slice configratsiyasi
import { createSlice } from "@reduxjs/toolkit";
import { ProductPageState } from "../../../lip/types/screen";

//silcelar => action va reducerdan iborat

const initialState: ProductPageState =  {
 restaurant: null,
 chosenProduct: null,     // data kelishidan oldingi birinchi qiymatlari
 products: []
}
// createSlice functionga object argument berdik
const productPageSlice = createSlice({
    name: 'productPage',
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurant= action.payload;//kelayotgan malumotni action.payload orqali olib initialstateni yangilayapmiz
        },
        setChosenProduct: (state, action) => {
            state.chosenProduct= action.payload;
        },
        setProducts: (state, action) => {
            state.products= action.payload;
        },

    }
});
//destructior qilib export qilyapmiz va bu actionlarni comandalar yasash uchun ishlatamiz
export const {setRestaurant, setChosenProduct, setProducts } = productPageSlice.actions;

// shu tariqa rudecer qilib storega yozib qoyamiz
const ProductPageReducer = productPageSlice.reducer
export default ProductPageReducer