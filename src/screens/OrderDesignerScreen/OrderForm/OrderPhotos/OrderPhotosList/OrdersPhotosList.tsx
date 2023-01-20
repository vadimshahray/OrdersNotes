import React, { useCallback } from 'react'
import { OrderPhotoItem } from './OrderPhotoItem'
import { FlatList, ListRenderItemInfo } from 'react-native'

export type OrdersPhotosListProps = {
  photos: Order['photos']
}

export const OrdersPhotosList = ({ photos }: OrdersPhotosListProps) => {
  const renderItem = useCallback(({ item }: ListRenderItemInfo<string>) => {
    return <OrderPhotoItem photoUri={item} />
  }, [])

  return <FlatList data={photos} renderItem={renderItem} horizontal />
}
