export const selectOrders = (state: RootState) => state.orders.orders.data

export const selectOrdersIsLoading = (state: RootState) =>
  state.orders.orders.isLoading
