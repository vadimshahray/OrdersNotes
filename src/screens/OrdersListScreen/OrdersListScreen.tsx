import React from 'react'
import { OrdersList } from './OrdersList'
import { ScreenContent } from '@components'
import { AddOrderButton } from './AddOrderButton'
import { OrdersListSearchBar } from './OrdersListSearchBar'
import { useOrdersListHeaderRight, useScreenTitle } from '@hooks'

export const OrdersListScreen = () => {
  useScreenTitle('Список заказов')
  useOrdersListHeaderRight()

  return (
    <ScreenContent noPadding>
      <OrdersListSearchBar />

      <OrdersList />

      <AddOrderButton />
    </ScreenContent>
  )
}
