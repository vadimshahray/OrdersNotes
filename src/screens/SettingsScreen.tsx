import { useScreenTitle } from '@hooks'
import { Text } from 'react-native-paper'
import { ScreenContent } from '@components'

export const SettingsScreen = () => {
  useScreenTitle('Настройки приложения')

  return (
    <ScreenContent>
      <Text>SettingScreen text</Text>
    </ScreenContent>
  )
}
