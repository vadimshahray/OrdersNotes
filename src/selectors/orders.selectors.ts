export const selectOrders = (state: RootState) => state.orders.orders.data

export const selectOrdersIsLoading = (state: RootState) =>
  state.orders.orders.isLoading

export const selectOrdersSearch = (state: RootState) => state.orders.search

export const selectQueryOrders = (state: RootState) => {
  const orders = selectOrders(state)
  const query = selectOrdersSearch(state).toLocaleLowerCase()

  return orders.filter(
    (o) =>
      o.name.toLocaleLowerCase().includes(query) ||
      o.notes?.toLocaleLowerCase().includes(query),
  )
}
