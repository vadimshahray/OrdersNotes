import { selectOrders } from '@selectors'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getStorageItem, removeStorageItem, setStorageItem } from '@storage'

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

export const updateOrder = createAsyncThunk<
  { index: number; order: Order },
  Order,
  { state: RootState }
>('orders/updateOne', async (order, { getState }) => {
  const orders = [...selectOrders(getState())]

  const i = orders.findIndex((o) => o.id === order.id)
  orders.splice(i, 1, order)

  await setStorageItem('@orders', orders)

  return {
    index: i,
    order,
  }
})

export const deleteOrder = createAsyncThunk<
  number,
  number,
  { state: RootState }
>('orders/deleteOne', async (orderId, { getState }) => {
  const orders = [...selectOrders(getState())]

  const i = orders.findIndex((o) => o.id === orderId)
  orders.splice(i, 1)

  await setStorageItem('@orders', orders)

  return i
})

export const deleteAllOrders = createAsyncThunk(
  'orders/deleteAll',
  async () => {
    await removeStorageItem('@orders')
  },
)
