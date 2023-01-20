import React from 'react'
import { deleteAllOrders } from '@slices'
import { Appbar } from 'react-native-paper'
import { useDispatch, useNavigation } from '@hooks'

export const DeleteAllOrdersAction = () => {
  const dispatch = useDispatch()

  const { navigate } = useNavigation()

  const handlePress = () => {
    navigate('ModalScreen', {
      title: 'Подтвердите действие',
      text: 'Вы уверены, что хотите удалить все заказы?',
      okAction: {
        text: 'Да',
        onPress: () => {
          dispatch(deleteAllOrders())
        },
      },
    })
  }

  return <Appbar.Action icon='delete-outline' onPress={handlePress} />
}
