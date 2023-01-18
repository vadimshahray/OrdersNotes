import { Text } from 'react-native-paper'

export type OrderItemProps = {
  order: Order
}

export const OrderItem = ({ order }: OrderItemProps) => {
  return (
    <>
      <Text variant='titleMedium' numberOfLines={1}>
        {order.name}
      </Text>

      <Text numberOfLines={2}>{order.notes}</Text>
    </>
  )
}
