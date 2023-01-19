import { selectOrders } from '@selectors'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getStorageItem, setStorageItem } from '@storage'

export const getAllOrders = createAsyncThunk<IStorageItems['@orders']>(
  'orders/getAll',
  async () => {
    return await getStorageItem('@orders')
  },
)

export const addOrder = createAsyncThunk<Order, Order, { state: RootState }>(
  'orders/addOne',
  async (order, { getState }) => {
    const orders = selectOrders(getState())

    order.id = orders.length ? orders[0].id + 1 : 1
    order.creationDate = Date.now()

    await setStorageItem('@orders', [order, ...orders])
    return order
  },
)
