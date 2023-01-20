import { selectOrders } from '@selectors'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getStorageItem, setStorageItem } from '@storage'

export const getAllOrders = createAsyncThunk<IStorageItems['@orders']>(
  'orders/getAll',
  async () => {
    return await getStorageItem('@orders')
  },
)

export const addOrder = createAsyncThunk<
  Order,
  EditableOrder,
  { state: RootState }
>('orders/addOne', async (order, { getState }) => {
  const orders = selectOrders(getState())

  const newOrder: Order = {
    id: orders.length ? orders[0].id + 1 : 1,
    creationDate: Date.now(),
    ...order,
  }

  await setStorageItem('@orders', [newOrder, ...orders])
  return newOrder
})
