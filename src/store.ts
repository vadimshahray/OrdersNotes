import { ordersSlice } from './slices'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    orders: ordersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
  },
})
