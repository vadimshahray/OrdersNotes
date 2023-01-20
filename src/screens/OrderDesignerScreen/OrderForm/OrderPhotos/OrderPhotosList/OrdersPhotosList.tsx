import React, { useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { EmptyContent, List } from '@components'
import { OrderPhotoItem } from './OrderPhotoItem'
import EmptyPhotos from '@assets/empty_photos_list.svg'
import { ListRenderItemInfo } from '@shopify/flash-list'

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
        onItemPress={() => {}}
        horizontal
        emptyContent={
          <EmptyContent size={80} text='Фотографий нет' Image={EmptyPhotos} />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    height: 120,
  },
})
