import { useEffect } from 'react'
import { SettingsScreenAction } from '@components'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export const useMainScreenHeaderRight = () => {
  const { navigate, setOptions } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const navigateToSettings = () => [navigate('SettingsScreen')]

  useEffect(() => {
    setOptions({
      headerRight: () => <SettingsScreenAction onPress={navigateToSettings} />,
    })
  }, [setOptions])
}
