import { useEffect } from 'react'
import { SettingsScreenAction } from '@components'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export const useMainScreenHeaderRight = () => {
  const { setOptions } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  useEffect(() => {
    setOptions({ headerRight: SettingsScreenAction })
  })
}
