import { useEffect } from 'react'
import { SettingsScreenAction } from '@components'
import { useNavigation } from '@react-navigation/native'

export const useMainScreenHeaderRight = () => {
  const { setOptions } = useNavigation()

  useEffect(() => {
    setOptions({ headerRight: SettingsScreenAction })
  })
}
