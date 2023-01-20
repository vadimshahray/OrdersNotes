import React from 'react'
import { useScreenTitle } from '@hooks'
import { OrdersList } from './OrdersList'
import { ScreenContent } from '@components'
import { AddOrderButton } from './AddOrderButton'
import { OrdersListSearchBar } from './OrdersListSearchBar'

export const OrdersListScreen = () => {
  useScreenTitle('Список заказов')

  return (
    <ScreenContent noPadding>
      <OrdersListSearchBar />

      <OrdersList />

      <AddOrderButton />
    </ScreenContent>
  )
}
