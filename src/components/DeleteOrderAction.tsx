import React from 'react'
import { deleteOrder } from '@slices'
import { Appbar } from 'react-native-paper'
import { useDispatch, useNavigation } from '@hooks'

export type DeleteOrderActionProps = {
  orderId: number
  onDelete: () => void
}

export const DeleteOrderAction = ({
  orderId,
  onDelete,
}: DeleteOrderActionProps) => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()

  const handlePress = () => {
    navigate('ModalScreen', {
      title: 'Подтвердите действие',
      text: 'Вы уверены, что хотите удалить этот заказ?',
      okAction: {
        text: 'Да',
        onPress: () => {
          dispatch(deleteOrder(orderId))
          onDelete()
        },
      },
    })
  }

  return <Appbar.Action icon='delete-outline' onPress={handlePress} />
}
