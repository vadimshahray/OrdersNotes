import { useEffect } from 'react'
import { useNavigation } from '@hooks'
import { SettingsScreenAction } from '@components'

export const useMainScreenHeaderRight = () => {
  const { navigate, setOptions } = useNavigation()

  const navigateToSettings = () => [navigate('SettingsScreen')]

  useEffect(() => {
    setOptions({
      headerRight: () => <SettingsScreenAction onPress={navigateToSettings} />,
    })
  }, [setOptions])
}
