import React from 'react'
import { Appbar as PaperAppbar } from 'react-native-paper'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

export const AppBar = ({
  navigation,
  back,
  options,
}: NativeStackHeaderProps) => {
  return (
    <PaperAppbar.Header>
      {back && <PaperAppbar.BackAction onPress={navigation.goBack} />}

      <PaperAppbar.Content title={options.title} />

      {options.headerRight?.({ canGoBack: true })}
    </PaperAppbar.Header>
  )
}
