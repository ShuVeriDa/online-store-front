import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {cartSlice} from "@/app/store/slice";

import { persistStore, persistReducer, FLUSH, REHYDRATE,PERSIST, PAUSE, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'online-store',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  cart: cartSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>