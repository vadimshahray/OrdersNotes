import { createSlice } from '@reduxjs/toolkit'

export const ordersSlice = createSlice<OrdersSliceState, OrdersSlice>({
  name: 'orders',
  initialState: {
    orders: [],
  },
  reducers: {},
})
