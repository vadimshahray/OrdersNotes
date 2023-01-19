import { addOrder, getAllOrders } from '@slices'
import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

export const ordersSlice = createSlice<
  OrdersSliceState,
  SliceCaseReducers<OrdersSliceState>
>({
  name: 'orders',
  initialState: {
    orders: {
      data: [],
      isLoading: true,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrders.pending, (state) => {
        state.orders.isLoading = true
      })
      .addCase(getAllOrders.fulfilled, (state, { payload }) => {
        state.orders.isLoading = false
        state.orders.data = payload ?? []
      })

      .addCase(addOrder.fulfilled, (state, { payload }) => {
        state.orders.data = [payload, ...state.orders.data]
      })
  },
})
