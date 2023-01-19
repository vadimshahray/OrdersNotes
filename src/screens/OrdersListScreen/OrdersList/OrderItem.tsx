import React from 'react'
import { useMemo } from 'react'
import { Text } from 'react-native-paper'
import { StyleSheet } from 'react-native'

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
    <>
      <Text variant='titleMedium' numberOfLines={1}>
        {order.name}
      </Text>

      <Text numberOfLines={2}>{order.notes}</Text>

      <Text variant='bodySmall' style={styles.date}>
        {date}
      </Text>
    </>
  )
}

const styles = StyleSheet.create({
  date: {
    alignSelf: 'flex-end',
  },
})
