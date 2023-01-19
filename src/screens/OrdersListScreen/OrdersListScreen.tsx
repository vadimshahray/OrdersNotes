import React from 'react'
import { OrdersList } from './OrdersList'
import { ScreenContent } from '@components'
import { AddOrderButton } from './AddOrderButton'
import { useOrdersListScreenHeaderRight, useScreenTitle } from '@hooks'

export const OrdersListScreen = () => {
  useScreenTitle('Список заказов')
  useOrdersListScreenHeaderRight()

  return (
    <ScreenContent noPadding>
      <OrdersList />

      <AddOrderButton />
    </ScreenContent>
  )
}
