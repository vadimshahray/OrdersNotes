import React, { useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import {
  List,
  EmptyContent,
  LIST_PADDING_V,
  LIST_ITEM_WRAPPER_H_OFFSET,
} from '@components'
import EmptyPhotos from '@assets/empty_photos_list.svg'
import { ListRenderItemInfo } from '@shopify/flash-list'
import {
  OrderPhotoItem,
  ORDER_PHOTO_WIDTH,
  ORDER_PHOTO_HEIGHT,
} from './OrderPhotoItem'

export type OrdersPhotosListProps = {
  photos: Order['photos']
}

export const OrdersPhotosList = ({ photos }: OrdersPhotosListProps) => {
  const renderItem = useCallback(({ item }: ListRenderItemInfo<string>) => {
    return <OrderPhotoItem photoUri={item} />
  }, [])

  return (
    <View style={styles.view}>
      <List
        data={photos}
        renderItem={renderItem}
        itemSize={ORDER_PHOTO_WIDTH}
        onItemPress={() => {}}
        horizontal
        emptyContent={
          <EmptyContent size={120} text='Фотографий нет' Image={EmptyPhotos} />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    height:
      ORDER_PHOTO_HEIGHT + 2 * LIST_ITEM_WRAPPER_H_OFFSET + 2 * LIST_PADDING_V,
  },
})
