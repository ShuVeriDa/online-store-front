import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAddCartPayload, IChangeQuantityPayload, IChangeSizePayload, IInitialState} from "@/app/store/types";
import {cart} from "@/app/data/cart.data";

const initialState: IInitialState = {
  items: cart
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IAddCartPayload>) => {
      const id = state.items.length
      state.items.push({...action.payload, id})
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter(item => item.product.id !== action.payload.id)
    },
    changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
      const {id, type} = action.payload
      const item = state.items.find(item => item.id === id)
      if (item) type === 'plus' ? item.quantity++ : item.quantity--
    },
    changeSize: (state, action: PayloadAction<IChangeSizePayload>) => {
      const {id, size} = action.payload
      const item = state.items.find(item => item.id === id)
      if (item) item.size = size
    },
  }
})