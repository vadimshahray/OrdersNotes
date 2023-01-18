import { Text, TouchableRipple } from 'react-native-paper'

export type OrderItemProps = {
  order: Order
  onPress: (order: Order) => void
}

export const OrderItem = ({ order, onPress }: OrderItemProps) => {
  const handlePress = () => {
    onPress(order)
  }

  return (
    <TouchableRipple onPress={handlePress}>
      <Text>{order.name}</Text>
    </TouchableRipple>
  )
}
