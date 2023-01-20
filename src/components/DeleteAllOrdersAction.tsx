import React from 'react'
import { useDispatch } from '@hooks'
import { deleteAllOrders } from '@slices'
import { Appbar } from 'react-native-paper'

export const DeleteAllOrdersAction = () => {
  const dispatch = useDispatch()

  const handlePress = () => {
    dispatch(deleteAllOrders())
  }

  return <Appbar.Action icon='delete-outline' onPress={handlePress} />
}
