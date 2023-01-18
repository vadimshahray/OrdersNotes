import React from 'react'
import { Text } from 'react-native-paper'
import { ScreenContent } from '@components'
import { AddOrderButton } from './AddOrderButton'
import { useMainScreenHeaderRight, useScreenTitle } from '@hooks'
import { OrdersList } from './OrdersList'

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
