import { Text, TouchableRipple } from 'react-native-paper'

export type OrderItemProps = {
  order: Order
}

export const OrderItem = ({ order }: OrderItemProps) => {
  return <Text>{order.name}</Text>
}
