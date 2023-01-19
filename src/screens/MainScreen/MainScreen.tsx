import React from 'react'
import { OrdersList } from './OrdersList'
import { ScreenContent } from '@components'
import { AddOrderButton } from './AddOrderButton'
import { useMainScreenHeaderRight, useScreenTitle } from '@hooks'

export const MainScreen = () => {
  useScreenTitle('Главная')
  useMainScreenHeaderRight()

  return (
    <ScreenContent noPadding>
      <OrdersList />

      <AddOrderButton />
    </ScreenContent>
  )
}
