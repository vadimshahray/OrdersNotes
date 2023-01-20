import React, { useMemo } from 'react'
import { Text } from 'react-native-paper'
import { OrderPhotos } from './OrderPhotos'
import { View, StyleSheet } from 'react-native'

export const ORDER_ITEM_HEIGHT = 58

export type OrderItemProps = {
  order: Order
}

export const OrderItem = ({ order }: OrderItemProps) => {
  const date = useMemo(() => {
    const d = new Date()
    d.setTime(order.creationDate)

    return d.toLocaleDateString()
  }, [order])

  return (
    <View style={styles.container}>
      <OrderPhotos photos={order.photos} />

      <View style={styles.metaContainer}>
        <Text variant='titleMedium' numberOfLines={1}>
          {order.name}
        </Text>

        <Text numberOfLines={2}>{order.notes}</Text>

        <Text variant='bodySmall' style={styles.date}>
          {date}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: ORDER_ITEM_HEIGHT,

    flexDirection: 'row',
  },

  metaContainer: {
    flex: 1,
  },

  date: {
    alignSelf: 'flex-end',
  },
})
