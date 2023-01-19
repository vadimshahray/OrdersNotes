import React from 'react'
import { useScreenTitle } from '@hooks'
import { List } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { ScreenContent } from '@components'

export const SettingsScreen = () => {
  useScreenTitle('Настройки приложения')

  return (
    <ScreenContent noPadding>
      <List.Section title='Общие' style={styles.list} />
    </ScreenContent>
  )
}

const styles = StyleSheet.create({
  list: {
    marginTop: 0,
  },
})
