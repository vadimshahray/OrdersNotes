import { selectOrders } from '@selectors'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getStorageItem, removeStorageItem, setStorageItem } from '@storage'
import {
  getFileExtension,
  deleteFileIfExists,
  deleteFilesIfExists,
  AppPhotosDirectoryPath,
  savePhotoToExternalAppDir,
} from '@utils'

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

  newOrder.photos = await moveOrderPhotosToLocalDir(newOrder)

  await setStorageItem('@orders', [newOrder, ...orders])
  return newOrder
})

export const updateOrder = createAsyncThunk<
  { index: number; order: Order },
  Order,
  { state: RootState }
>('orders/updateOne', async (updatedOrder, { getState }) => {
  const newOrder = { ...updatedOrder }
  const orders = [...selectOrders(getState())]

  const i = orders.findIndex((o) => o.id === updatedOrder.id)

  deleteUnsavedOrderPhotos(orders[i].photos, newOrder.photos)
  newOrder.photos = await moveOrderPhotosToLocalDir(newOrder)

  orders.splice(i, 1, newOrder)

  await setStorageItem('@orders', orders)

  return {
    index: i,
    order: newOrder,
  }
})

export const deleteOrder = createAsyncThunk<
  number,
  number,
  { state: RootState }
>('orders/deleteOne', async (orderId, { getState }) => {
  const orders = [...selectOrders(getState())]

  const i = orders.findIndex((o) => o.id === orderId)
  const deletedOrders = orders.splice(i, 1)

  await deleteFilesIfExists(deletedOrders[0].photos)

  await setStorageItem('@orders', orders)

  return i
})

export const deleteAllOrders = createAsyncThunk(
  'orders/deleteAll',
  async () => {
    await deleteFileIfExists(AppPhotosDirectoryPath)

    await removeStorageItem('@orders')
  },
)

const moveOrderPhotosToLocalDir = async (order: Order) => {
  const newPhotosPaths: string[] = await Promise.all(
    order.photos.map(
      async (p, i) =>
        await savePhotoToExternalAppDir(
          p,
          `order_${order.id}_photo_${i}_${Date.now()}${getFileExtension(p)}`,
        ),
    ),
  )

  return newPhotosPaths
}

const deleteUnsavedOrderPhotos = (oldPhotos: string[], newPhotos: string[]) => {
  // Фотографии, которые не были изменены
  const savedOldPhotos = newPhotos.filter((p) =>
    p.includes(AppPhotosDirectoryPath),
  )

  // Удаляем все фото, которых больше нет в обновленном заказе
  oldPhotos.forEach((oldPhoto) => {
    if (savedOldPhotos.find((p) => p === oldPhoto)) return

    deleteFileIfExists(oldPhoto)
  })
}
