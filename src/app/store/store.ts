import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {cartSlice} from "@/app/store/slice";

const rootReducer = combineReducers({
  cart: cartSlice.reducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type TypeRootState = ReturnType<typeof rootReducer>