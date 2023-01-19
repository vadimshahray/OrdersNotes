import React from 'react'
import { useScreenTitle } from '@hooks'
import { OrdersList } from './OrdersList'
import { ScreenContent } from '@components'
import { AddOrderButton } from './AddOrderButton'

export const OrdersListScreen = () => {
  useScreenTitle('Список заказов')

  return (
    <ScreenContent noPadding>
      <OrdersList />

      <AddOrderButton />
    </ScreenContent>
  )
}
