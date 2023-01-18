type OrdersSliceState = {
  orders: Order[]
}

interface OrdersSlice extends SliceCaseReducer<OrdersSliceState> {}
