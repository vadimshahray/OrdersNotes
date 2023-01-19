import { useNavigation } from '@hooks'
import { SettingsScreenAction } from '@components'
import React, { useEffect, useCallback } from 'react'

export const useMainScreenHeaderRight = () => {
  const { navigate, setOptions } = useNavigation()

  const navigateToSettings = useCallback(() => {
    navigate('SettingsScreen')
  }, [navigate])

  useEffect(() => {
    setOptions({
      headerRight: () => <SettingsScreenAction onPress={navigateToSettings} />,
    })
  }, [setOptions, navigateToSettings])
}
