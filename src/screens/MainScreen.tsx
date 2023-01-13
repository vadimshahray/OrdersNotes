import React from 'react'
import { useScreenTitle } from '@hooks'
import { Text } from 'react-native-paper'
import { ScreenContent } from '@components'

export const MainScreen = () => {
  useScreenTitle('Главная')

  return (
    <ScreenContent>
      <Text>MainScreen text</Text>
    </ScreenContent>
  )
}
