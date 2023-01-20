import React from 'react'
import { useDispatch } from '@hooks'
import { deleteOrder } from '@slices'
import { Appbar } from 'react-native-paper'

export type DeleteOrderActionProps = {
  orderId: number
  onDelete: () => void
}

export const DeleteOrderAction = ({
  orderId,
  onDelete,
}: DeleteOrderActionProps) => {
  const dispatch = useDispatch()

  const handlePress = () => {
    dispatch(deleteOrder(orderId))
    onDelete()
  }

  return <Appbar.Action icon='delete-outline' onPress={handlePress} />
}
