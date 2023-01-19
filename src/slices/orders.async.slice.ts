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

    await setStorageItem('@orders', [order, ...orders])
    return order
  },
)
