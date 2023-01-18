import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: Array<Order>(),
  },
  reducers: {
    addOrder: (state, { payload }: PayloadAction<Order>) => {
      state.orders.push(payload)
    },
  },
})

export const { addOrder } = ordersSlice.actions
