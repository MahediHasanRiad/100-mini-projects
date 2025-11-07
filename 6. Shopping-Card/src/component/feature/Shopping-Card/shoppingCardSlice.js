import { createSlice } from "@reduxjs/toolkit";
import products from '../../../Data/data'

const initialValue = {
        products: products,
        OrderSummary: {
            totalItems: 0,
            totalAmmounts: 0
        }
}

export const ShoppingCartSlice = createSlice({
    name: 'ShoppingCart',
    initialState: initialValue,
    reducers: {
        quantityIncrement: (state, action) => {
            const item = state.products.find(product => product.id === action.payload)

            if(item){
                item.quantity += 1
            }
        },
        quantityDecrement: (state, action) => {
            const item = state.products.find(item => item.id === action.payload)

            if(item.quantity > 0){
                item.quantity -= 1
            }
        },
        addToCard: (state) => {
            const buyItems = state.products.filter(item => item.quantity > 0)

            state.OrderSummary.totalItems = buyItems.length
            state.OrderSummary.totalAmmounts = buyItems.reduce((acc, cur) => {
               return acc + (cur.price * cur.quantity)
            }, 0)

        }
    }
})

export const { quantityIncrement, quantityDecrement, addToCard } = ShoppingCartSlice.actions
export default ShoppingCartSlice.reducer