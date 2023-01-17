import React from 'react'
import { Text } from 'react-native-paper'
import { ScreenContent } from '@components'
import { AddOrderButton } from './AddOrderButton'
import { useMainScreenHeaderRight, useScreenTitle } from '@hooks'

export const MainScreen = () => {
  useScreenTitle('Главная')
  useMainScreenHeaderRight()

  return (
    <ScreenContent>
      <Text>MainScreen text</Text>

      <AddOrderButton />
    </ScreenContent>
  )
}
