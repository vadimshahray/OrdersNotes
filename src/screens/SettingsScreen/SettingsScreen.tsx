import { useScreenTitle } from '@hooks'
import { List } from 'react-native-paper'
import { ScreenContent } from '@components'

export const SettingsScreen = () => {
  useScreenTitle('Настройки приложения')

  return (
    <ScreenContent noPadding>
      <List.Section title='Общие' style={{ marginTop: 0 }}></List.Section>
    </ScreenContent>
  )
}
