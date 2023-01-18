import { useEffect } from 'react'
import { SettingsScreenAction } from '@components'
import { useNavigation } from '@react-navigation/native'

export const useMainScreenHeaderRight = () => {
  const { navigate, setOptions } = useNavigation<AppNavigation>()

  const navigateToSettings = () => [navigate('SettingsScreen')]

  useEffect(() => {
    setOptions({
      headerRight: () => <SettingsScreenAction onPress={navigateToSettings} />,
    })
  }, [setOptions])
}
