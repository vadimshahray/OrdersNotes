import { addOrder, getAllOrders, updateOrder } from '@slices'
import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'

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
    search: '',
  },
  reducers: {
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload
    },
  },
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

      .addCase(updateOrder.fulfilled, (state, { payload }) => {
        state.orders.data[payload.index] = payload.order
      })
  },
})

export const { setSearch } = ordersSlice.actions
